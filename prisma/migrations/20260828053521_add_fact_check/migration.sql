-- CreateTable
CREATE TABLE "FactCheck" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "politicianId" TEXT,
    "politicianName" TEXT NOT NULL,
    "claim" TEXT NOT NULL,
    "context" TEXT NOT NULL,
    "contextSource" TEXT,
    "verdict" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "sources" TEXT NOT NULL,
    "checkedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "FactCheck_politicianId_fkey" FOREIGN KEY ("politicianId") REFERENCES "Politician" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "FactCheck_politicianId_idx" ON "FactCheck"("politicianId");

-- CreateIndex
CREATE INDEX "FactCheck_verdict_idx" ON "FactCheck"("verdict");
