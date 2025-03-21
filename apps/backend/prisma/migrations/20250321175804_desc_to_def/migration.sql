/*
  Warnings:

  - You are about to drop the column `description` on the `Term` table. All the data in the column will be lost.
  - Added the required column `definition` to the `Term` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Term"
RENAME COLUMN "description" TO "definition"
