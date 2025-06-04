-- DropForeignKey
ALTER TABLE "UserTerm" DROP CONSTRAINT "UserTerm_termId_fkey";

-- DropForeignKey
ALTER TABLE "UserTerm" DROP CONSTRAINT "UserTerm_userId_fkey";

-- AddForeignKey
ALTER TABLE "UserTerm" ADD CONSTRAINT "UserTerm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTerm" ADD CONSTRAINT "UserTerm_termId_fkey" FOREIGN KEY ("termId") REFERENCES "Term"("id") ON DELETE CASCADE ON UPDATE CASCADE;
