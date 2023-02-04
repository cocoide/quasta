-- CreateTable
CREATE TABLE "comment" (
    "id" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "answerId" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FavoriteCommnet" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FavoriteAnswer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FavoriteCommnet_AB_unique" ON "_FavoriteCommnet"("A", "B");

-- CreateIndex
CREATE INDEX "_FavoriteCommnet_B_index" ON "_FavoriteCommnet"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FavoriteAnswer_AB_unique" ON "_FavoriteAnswer"("A", "B");

-- CreateIndex
CREATE INDEX "_FavoriteAnswer_B_index" ON "_FavoriteAnswer"("B");

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "answer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteCommnet" ADD CONSTRAINT "_FavoriteCommnet_A_fkey" FOREIGN KEY ("A") REFERENCES "comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteCommnet" ADD CONSTRAINT "_FavoriteCommnet_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteAnswer" ADD CONSTRAINT "_FavoriteAnswer_A_fkey" FOREIGN KEY ("A") REFERENCES "answer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteAnswer" ADD CONSTRAINT "_FavoriteAnswer_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
