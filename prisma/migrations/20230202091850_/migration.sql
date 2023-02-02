/*
  Warnings:

  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_authorId_fkey";

-- DropTable
DROP TABLE "Question";

-- CreateTable
CREATE TABLE "answer" (
    "id" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "queryId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "answer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question" (
    "query" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "answer_answer_key" ON "answer"("answer");

-- CreateIndex
CREATE UNIQUE INDEX "question_query_key" ON "question"("query");

-- AddForeignKey
ALTER TABLE "answer" ADD CONSTRAINT "answer_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answer" ADD CONSTRAINT "answer_queryId_fkey" FOREIGN KEY ("queryId") REFERENCES "question"("query") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
