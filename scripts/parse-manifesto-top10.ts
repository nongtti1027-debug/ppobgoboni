// Parses the "10대 핵심공약" (top-10 key pledges) section out of the full
// manifesto questionnaire text (hwpx/docx only, where full-text extraction
// worked cleanly) and adds them as additional, richer Pledge rows.
import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { prisma } from "../src/lib/db";

const TEXT_DIR = join(__dirname, "..", "data", "manifesto", "text_full");

const SIDO_SHORT_TO_FULL: Record<string, string[]> = {
  "서울": ["서울특별시"],
  "부산": ["부산광역시"],
  "대구": ["대구광역시"],
  "인천": ["인천광역시"],
  "광주": ["광주광역시", "전남광주통합특별시"],
  "대전": ["대전광역시"],
  "울산": ["울산광역시"],
  "경기": ["경기도"],
  "강원": ["강원특별자치도", "강원도"],
  "충북": ["충청북도"],
  "충남": ["충청남도"],
  "전북": ["전북특별자치도", "전라북도"],
  "전남": ["전라남도", "전남광주통합특별시"],
  "경북": ["경상북도"],
  "경남": ["경상남도"],
  "제주": ["제주특별자치도"],
  "세종": ["세종특별자치시"],
};

function parseFilename(filename: string) {
  const base = filename.replace(/\.txt$/, "");
  const afterDoubleUnderscore = base.split("__").slice(1).join("__");
  const parts = afterDoubleUnderscore.split("_");
  if (parts.length < 5) return null;
  const districtRaw = parts[2];
  const nameRaw = parts[parts.length - 1];
  const name = nameRaw.replace(/\s*후보\s*$/, "").trim();
  const districtParts = districtRaw.trim().split(/\s+/);
  const district = districtParts[districtParts.length - 1];
  const sido = districtParts[0];
  return { sido, district, name };
}

type Top10Item = {
  rank: number;
  title: string;
  budget: string;
  status: string; // 현황 및 문제점
  goal: string; // 정책목표
  content: string; // 약속내용
  procedure: string; // 이행절차 및 기간
  funding: string; // 재원조달방안
  effect: string; // 기대효과
};

function cleanFieldText(text: string): string {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => {
      if (l.length === 0) return false;
      if (/^[❍○●◦·\-\*]+\s*$/.test(l)) return false;
      if (/^20\d\d(\s*년)?(\s*이후)?\s*$/.test(l)) return false;
      if (/^(우선|순위|공약명|재원조달|이행|기간|추진|주체)$/.test(l)) return false;
      return true;
    })
    .join("\n")
    .trim();
}

function extractSection3(fullText: string): string | null {
  const startIdx = fullText.search(/\n?\d\.\s*(전체\s*)?공약\s*(총\s*)?수와?\s*소요재원/);
  if (startIdx === -1) return null;
  const endIdx = fullText.indexOf("공약가계부", startIdx);
  return fullText.substring(startIdx, endIdx === -1 ? undefined : endIdx);
}

function parseTop10(section3: string): Top10Item[] {
  // Split on "N순위" occurring at line start, only the first 10 (detailed
  // blocks) — a recap table with the same "N순위" markers follows afterward,
  // so we cap at 10 items and ignore anything beyond a duplicate "1순위".
  const rankMarker = /(?:^|\n)[\[【]?\s*(\d{1,2})\s*순위\s*[\]】]?\s*\n/g;
  const matches: { rank: number; start: number; contentStart: number }[] = [];
  let m;
  while ((m = rankMarker.exec(section3)) !== null) {
    matches.push({ rank: parseInt(m[1], 10), start: m.index, contentStart: rankMarker.lastIndex });
  }

  const items: Top10Item[] = [];
  const seen = new Set<number>();
  for (let i = 0; i < matches.length; i++) {
    const cur = matches[i];
    if (seen.has(cur.rank)) continue; // skip the recap-table repeat
    seen.add(cur.rank);
    const nextStart = i + 1 < matches.length ? matches[i + 1].start : section3.length;
    const block = section3.substring(cur.contentStart, nextStart);

    const titleMatch = block.match(/공약명:?\s*(.+)/);
    const title = titleMatch ? titleMatch[1].trim() : `공약 ${cur.rank}순위`;

    // Labels only count when they start a line (optionally after a bullet
    // marker like ❍/○/-). Without this anchor, a combined label such as
    // "❍ 이행절차 및 재원조달방안" would false-match the bare "재원조달방안"
    // pattern mid-line and truncate the previous field right there.
    const BULLET = "(?:^|\\n)[ \\t]*[❍○●·\\-]?[ \\t]*";
    const LABEL_PATTERNS: Record<string, string> = {
      status: "현황\\s*(?:및|·)?\\s*문제점",
      goal: "정책목표",
      content: "약속\\s*내용",
      procedure: "이행절차\\s*(?:및|·)?\\s*(?:기간|재원조달방안)",
      funding: "재원조달방안",
      effect: "기대효과",
    };
    const order = ["status", "goal", "content", "procedure", "funding", "effect"];

    const field = (key: string) => {
      const idx = order.indexOf(key);
      const own = BULLET + LABEL_PATTERNS[key];
      const rest = order.slice(idx + 1).map((k) => `${BULLET}${LABEL_PATTERNS[k]}\\s*:?\\s*\\n`);
      const re = new RegExp(`${own}\\s*:?\\s*\\n([\\s\\S]*?)(?=${rest.length ? rest.join("|") + "|" : ""}$)`);
      const fm = block.match(re);
      return fm ? fm[1].trim() : "";
    };

    const status = cleanFieldText(field("status"));
    const goal = cleanFieldText(field("goal"));
    const content = cleanFieldText(field("content"));
    const procedure = cleanFieldText(field("procedure"));
    let funding = cleanFieldText(field("funding"));
    const effect = cleanFieldText(field("effect"));
    // If the candidate combined "이행절차 및 재원조달방안" into one label,
    // funding's own separate label won't be found — fall back to the merged
    // procedure text rather than leaving it blank.
    if (!funding && procedure) funding = procedure;

    if (cur.rank >= 1 && cur.rank <= 10) {
      items.push({ rank: cur.rank, title, budget: "", status, goal, content, procedure, funding, effect });
    }
  }
  return items.sort((a, b) => a.rank - b.rank);
}

async function main() {
  const files = readdirSync(TEXT_DIR).filter((f) => f.endsWith(".txt"));
  const mayors = await prisma.politician.findMany({ where: { level: "mayor" } });

  for (const file of files) {
    const parsed = parseFilename(file);
    if (!parsed) {
      console.log(`[파싱 실패] ${file}`);
      continue;
    }
    const fullSidoNames = SIDO_SHORT_TO_FULL[parsed.sido] ?? [parsed.sido];
    const match = mayors.find(
      (p) => p.name === parsed.name && p.office.includes(parsed.district) && fullSidoNames.some((full) => p.region === full),
    );
    if (!match) {
      console.log(`[매칭 안됨] ${parsed.sido} ${parsed.district} ${parsed.name}`);
      continue;
    }

    const text = readFileSync(join(TEXT_DIR, file), "utf-8");
    const section3 = extractSection3(text);
    if (!section3) {
      console.log(`[10대공약 섹션 없음] ${match.office} ${match.name}`);
      continue;
    }
    const items = parseTop10(section3);
    console.log(`[${match.office} ${match.name}] 10대공약 ${items.length}개 파싱됨`);

    // Remove any previously-imported top10 entries for this politician (idempotent re-run)
    await prisma.pledge.deleteMany({
      where: { politicianId: match.id, OR: [{ source: "manifesto" }, { realm: "매니페스토 10대 핵심공약" }] },
    });

    for (const item of items) {
      await prisma.pledge.create({
        data: {
          politicianId: match.id,
          order: 100 + item.rank, // keep separate from the 5 official NEC pledges (order 1-5)
          source: "manifesto",
          title: item.title,
          goal: [item.status && `[현황·문제점] ${item.status}`, item.goal && `[정책목표] ${item.goal}`]
            .filter(Boolean)
            .join("\n\n"),
          method: item.content || "(내용 없음)",
          timeline: item.procedure || "(명시 안됨)",
          funding: [item.funding, item.effect && `[기대효과] ${item.effect}`].filter(Boolean).join("\n\n") || "(명시 안됨)",
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
