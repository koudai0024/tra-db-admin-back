/*
  Warnings:

  - You are about to drop the `tourist_spot_facility` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "tourist_spot_facility" DROP CONSTRAINT "tourist_spot_facility_facility_id_fkey";

-- DropForeignKey
ALTER TABLE "tourist_spot_facility" DROP CONSTRAINT "tourist_spot_facility_tourist_spot_id_fkey";

-- DropTable
DROP TABLE "tourist_spot_facility";

-- CreateTable
CREATE TABLE "_tourist_spot_facility" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_tourist_spot_facility_AB_unique" ON "_tourist_spot_facility"("A", "B");

-- CreateIndex
CREATE INDEX "_tourist_spot_facility_B_index" ON "_tourist_spot_facility"("B");

-- AddForeignKey
ALTER TABLE "_tourist_spot_facility" ADD FOREIGN KEY ("A") REFERENCES "facilities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_tourist_spot_facility" ADD FOREIGN KEY ("B") REFERENCES "tourist_spots"("id") ON DELETE CASCADE ON UPDATE CASCADE;
