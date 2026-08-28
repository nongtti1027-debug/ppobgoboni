-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "politicianId" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Comment_politicianId_fkey" FOREIGN KEY ("politicianId") REFERENCES "Politician" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FactCheckComment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "factCheckId" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "FactCheckComment_factCheckId_fkey" FOREIGN KEY ("factCheckId") REFERENCES "FactCheck" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Comment_politicianId_idx" ON "Comment"("politicianId");

-- CreateIndex
CREATE INDEX "FactCheckComment_factCheckId_idx" ON "FactCheckComment"("factCheckId");
