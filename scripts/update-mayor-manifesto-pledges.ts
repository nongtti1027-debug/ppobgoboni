/**
 * Judges the "한국매니페스토실천본부" (Korea Manifesto Movement) manifesto
 * pledge set for the 43 city/county mayors who have one — a second pledge
 * set beyond their main NEC pledges, previously entirely unrated. Data in
 * update-mayor-manifesto-pledges-data.json was researched via parallel
 * agents (WebSearch + Naver News), each politician resolved by
 * name+region+office since local dev.db and production Turso assign
 * different politician ids.
 *
 * 조상래 (전남 곡성군수) is excluded: his 10 manifesto pledges in the source
 * data are all unfilled template placeholders ("완료시기" title, empty
 * goal) with no real content to judge — needs a source re-scrape, not a
 * judgment.
 *
 * Usage: npx tsx scripts/update-mayor-manifesto-pledges.ts
 *        DATABASE_URL="libsql://...?authToken=..." npx tsx scripts/update-mayor-manifesto-pledges.ts
 */
import "dotenv/config";
import { readFileSync } from "fs";
import path from "path";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

type PledgeJudgment = { order: number; percent: number; note: string; source: string };
type PoliticianEntry = {
  name: string;
  region: string;
  office: string;
  pledges: PledgeJudgment[];
};

const adapter = new PrismaLibSql({ url: process.env.DATABASE_URL ?? "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  const data: PoliticianEntry[] = JSON.parse(
    readFileSync(path.join(__dirname, "update-mayor-manifesto-pledges-data.json"), "utf-8"),
  );

  let updated = 0;
  for (const p of data) {
    const politician = await prisma.politician.findFirst({
      where: { name: p.name, region: p.region, office: p.office },
      select: { id: true },
    });
    if (!politician) {
      console.warn(`No politician match for ${p.name} (${p.region} ${p.office})`);
      continue;
    }
    for (const pl of p.pledges) {
      const res = await prisma.pledge.updateMany({
        where: { politicianId: politician.id, source: "manifesto", order: pl.order },
        data: {
          progressPercent: pl.percent,
          statusNote: pl.note,
          statusSource: pl.source,
          statusCheckedAt: new Date(),
          status: "in_progress",
        },
      });
      if (res.count === 0) {
        console.warn(`No pledge match for ${p.name} order ${pl.order}`);
      } else {
        updated += res.count;
      }
    }
  }

  console.log(`Updated ${updated} pledges across ${data.length} politicians.`);
}

main().finally(() => prisma.$disconnect());
