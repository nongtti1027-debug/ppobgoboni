-- CreateTable
CREATE TABLE "Politician" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "hanjaName" TEXT,
    "party" TEXT NOT NULL,
    "office" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "electionName" TEXT NOT NULL,
    "electionDate" DATETIME,
    "sgId" TEXT NOT NULL,
    "sgTypecode" TEXT NOT NULL,
    "huboid" TEXT,
    "photoUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Pledge" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "politicianId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "realm" TEXT,
    "title" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "timeline" TEXT NOT NULL,
    "funding" TEXT NOT NULL,
    "measurability" TEXT NOT NULL DEFAULT 'unrated',
    "status" TEXT NOT NULL DEFAULT 'unrated',
    "statusNote" TEXT,
    "statusSource" TEXT,
    "statusCheckedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Pledge_politicianId_fkey" FOREIGN KEY ("politicianId") REFERENCES "Politician" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Politician_region_idx" ON "Politician"("region");

-- CreateIndex
CREATE INDEX "Politician_level_idx" ON "Politician"("level");

-- CreateIndex
CREATE UNIQUE INDEX "Politician_sgId_huboid_key" ON "Politician"("sgId", "huboid");

-- CreateIndex
CREATE INDEX "Pledge_politicianId_idx" ON "Pledge"("politicianId");

-- CreateIndex
CREATE INDEX "Pledge_status_idx" ON "Pledge"("status");
