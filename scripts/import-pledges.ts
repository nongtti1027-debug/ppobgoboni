// Imports the JSON pledge files under data/pledges/ into the database.
// Run with: npm run import:pledges
import { readFileSync } from "fs";
import { join } from "path";
import { prisma } from "../src/lib/db";

type ParsedPledge = {
  id: string;
  order: number;
  realm: string;
  title: string;
  goal: string;
  method: string;
  timeline: string;
  funding: string;
};

type ParsedFile = {
  politician: string;
  hanja_name?: string;
  party: string;
  office?: string;
  sido?: string;
  election?: string;
  election_date?: string;
  sgId: string;
  sgTypecode: string;
  cnddtId: string;
  pledges: ParsedPledge[];
};

const DATA_DIR = join(__dirname, "..", "data", "pledges");

const LEVEL_BY_SGTYPECODE: Record<string, string> = {
  "1": "president",
  "3": "governor",
  "4": "mayor",
};

async function importFile(filePath: string) {
  const raw = readFileSync(filePath, "utf-8");
  const data: ParsedFile = JSON.parse(raw);

  const office = data.office ?? "대통령";
  const region = data.sido ?? "전국";
  const electionName = data.election ?? "제9회 전국동시지방선거";
  const level = LEVEL_BY_SGTYPECODE[data.sgTypecode] ?? "governor";

  const politician = await prisma.politician.upsert({
    where: { sgId_huboid: { sgId: data.sgId, huboid: data.cnddtId } },
    create: {
      name: data.politician,
      hanjaName: data.hanja_name,
      party: data.party,
      office,
      region,
      level,
      electionName,
      electionDate: data.election_date ? new Date(data.election_date) : null,
      sgId: data.sgId,
      sgTypecode: data.sgTypecode,
      huboid: data.cnddtId,
    },
    update: {
      name: data.politician,
      party: data.party,
      office,
      region,
    },
  });

  for (const pledge of data.pledges) {
    const existing = await prisma.pledge.findFirst({
      where: { politicianId: politician.id, order: pledge.order },
    });
    if (existing) {
      await prisma.pledge.update({
        where: { id: existing.id },
        data: {
          realm: pledge.realm,
          title: pledge.title,
          goal: pledge.goal,
          method: pledge.method,
          timeline: pledge.timeline,
          funding: pledge.funding,
        },
      });
    } else {
      await prisma.pledge.create({
        data: {
          politicianId: politician.id,
          order: pledge.order,
          realm: pledge.realm,
          title: pledge.title,
          goal: pledge.goal,
          method: pledge.method,
          timeline: pledge.timeline,
          funding: pledge.funding,
        },
      });
    }
  }

  console.log(`  ${data.politician} (${office}) - 공약 ${data.pledges.length}개`);
}

async function main() {
  console.log("대통령 공약 가져오는 중...");
  await importFile(join(DATA_DIR, "president_lee_jaemyung.json"));

  console.log("시도지사 공약 가져오는 중...");
  const { readdirSync } = await import("fs");
  const sidoDir = join(DATA_DIR, "sido_2026", "parsed");
  for (const file of readdirSync(sidoDir).filter((f) => f.endsWith(".json"))) {
    await importFile(join(sidoDir, file));
  }

  console.log("기초단체장 공약 가져오는 중...");
  const mayorDir = join(DATA_DIR, "mayor_2026", "parsed");
  for (const file of readdirSync(mayorDir).filter((f) => f.endsWith(".json"))) {
    await importFile(join(mayorDir, file));
  }

  console.log("완료.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
