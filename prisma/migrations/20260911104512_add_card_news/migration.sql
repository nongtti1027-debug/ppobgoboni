-- CreateTable
CREATE TABLE "CardNews" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "politicianId" TEXT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "caption" TEXT,
    "publishedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "CardNews_politicianId_fkey" FOREIGN KEY ("politicianId") REFERENCES "Politician" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "CardNews_slug_key" ON "CardNews"("slug");

-- CreateIndex
CREATE INDEX "CardNews_politicianId_idx" ON "CardNews"("politicianId");

-- CreateIndex
CREATE INDEX "CardNews_category_idx" ON "CardNews"("category");
