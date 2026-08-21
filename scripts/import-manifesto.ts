// Matches extracted manifesto.or.kr questionnaire text files to existing
// Politician records (by district + candidate name) and stores the raw text.
// Run with: npx tsx scripts/import-manifesto.ts
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

// filename: "<region folder>__2026_제9회지방선거_<시도 구시군>_<정당>_<이름> 후보.txt"
function parseFilename(filename: string) {
  const base = filename.replace(/\.txt$/, "");
  const afterDoubleUnderscore = base.split("__").slice(1).join("__");
  const parts = afterDoubleUnderscore.split("_");
  // parts: ["2026", "제9회지방선거", "<시도 구시군>", "<정당>", "<이름> 후보"]
  if (parts.length < 5) return null;
  const districtRaw = parts[2]; // e.g. "서울 종로구"
  const nameRaw = parts[parts.length - 1]; // e.g. "정문헌 후보"
  const name = nameRaw.replace(/\s*후보\s*$/, "").trim();
  const districtParts = districtRaw.trim().split(/\s+/);
  const district = districtParts[districtParts.length - 1]; // "종로구"
  const sido = districtParts[0]; // "서울"
  return { sido, district, name };
}

async function main() {
  const files = readdirSync(TEXT_DIR).filter((f) => f.endsWith(".txt"));
  console.log(`파일 ${files.length}개 처리 시작`);

  const mayors = await prisma.politician.findMany({
    where: { level: "mayor" },
  });
  const governors = await prisma.politician.findMany({
    where: { level: "governor" },
  });
  const candidates = [...mayors, ...governors];

  let matched = 0;
  let unmatched = 0;

  for (const file of files) {
    const parsed = parseFilename(file);
    if (!parsed) {
      console.log(`  [파싱 실패] ${file}`);
      unmatched++;
      continue;
    }

    const fullSidoNames = SIDO_SHORT_TO_FULL[parsed.sido] ?? [parsed.sido];
    const match = candidates.find(
      (p) =>
        p.name === parsed.name &&
        p.office.includes(parsed.district) &&
        fullSidoNames.some((full) => p.region === full),
    );

    if (!match) {
      console.log(`  [매칭 안됨 - 낙선/미당선 후보로 추정] ${parsed.sido} ${parsed.district} ${parsed.name}`);
      unmatched++;
      continue;
    }

    const raw = readFileSync(join(TEXT_DIR, file), "utf-8");
    const text = raw
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => {
        if (l.length === 0) return false;
        if (/^[❍○●◦·\-\*]+\s*$/.test(l)) return false;
        if (/^20\d\d(\s*년)?(\s*이후)?\s*$/.test(l)) return false;
        if (/^(우선|순위|공약명|재원조달|이행|기간|추진|주체)$/.test(l)) return false;
        return true;
      })
      .join("\n");
    await prisma.politician.update({
      where: { id: match.id },
      data: {
        manifestoText: text,
        manifestoSourceFile: file,
        manifestoImportedAt: new Date(),
      },
    });
    console.log(`  [매칭] ${match.office} ${match.name}`);
    matched++;
  }

  console.log(`\n완료: 매칭 ${matched}건, 매칭 안됨(낙선 후보 등) ${unmatched}건`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
