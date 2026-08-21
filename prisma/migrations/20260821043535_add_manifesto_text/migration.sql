-- AlterTable
ALTER TABLE "Politician" ADD COLUMN "manifestoImportedAt" DATETIME;
ALTER TABLE "Politician" ADD COLUMN "manifestoSourceFile" TEXT;
ALTER TABLE "Politician" ADD COLUMN "manifestoText" TEXT;
