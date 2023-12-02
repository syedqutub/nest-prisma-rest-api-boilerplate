-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT,
    "brand" TEXT,
    "engineNo" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);
