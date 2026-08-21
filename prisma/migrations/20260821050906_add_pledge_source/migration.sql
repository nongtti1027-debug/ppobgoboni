-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pledge" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "politicianId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "realm" TEXT,
    "source" TEXT NOT NULL DEFAULT 'nec',
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
INSERT INTO "new_Pledge" ("createdAt", "funding", "goal", "id", "measurability", "method", "order", "politicianId", "realm", "status", "statusCheckedAt", "statusNote", "statusSource", "timeline", "title", "updatedAt") SELECT "createdAt", "funding", "goal", "id", "measurability", "method", "order", "politicianId", "realm", "status", "statusCheckedAt", "statusNote", "statusSource", "timeline", "title", "updatedAt" FROM "Pledge";
DROP TABLE "Pledge";
ALTER TABLE "new_Pledge" RENAME TO "Pledge";
CREATE INDEX "Pledge_politicianId_idx" ON "Pledge"("politicianId");
CREATE INDEX "Pledge_status_idx" ON "Pledge"("status");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
