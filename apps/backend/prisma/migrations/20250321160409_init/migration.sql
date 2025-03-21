-- CreateTable
CREATE TABLE "Term" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isFavourite" BOOLEAN NOT NULL,

    CONSTRAINT "Term_pkey" PRIMARY KEY ("id")
);
