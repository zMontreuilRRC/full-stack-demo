/*
  Warnings:

  - You are about to drop the column `isFavourite` on the `Term` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Term" DROP COLUMN "isFavourite";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTerm" (
    "userId" TEXT NOT NULL,
    "termId" INTEGER NOT NULL,

    CONSTRAINT "UserTerm_pkey" PRIMARY KEY ("userId","termId")
);

-- AddForeignKey
ALTER TABLE "UserTerm" ADD CONSTRAINT "UserTerm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTerm" ADD CONSTRAINT "UserTerm_termId_fkey" FOREIGN KEY ("termId") REFERENCES "Term"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
