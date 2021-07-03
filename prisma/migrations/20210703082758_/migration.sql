/*
  Warnings:

  - You are about to drop the `tourist_spot_to_tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "routes" DROP CONSTRAINT "routes_place_id_fkey";

-- DropForeignKey
ALTER TABLE "tourist_spots" DROP CONSTRAINT "tourist_spots_place_id_fkey";

-- DropForeignKey
ALTER TABLE "tourist_spot_to_tag" DROP CONSTRAINT "tourist_spot_to_tag_tag_id_fkey";

-- DropForeignKey
ALTER TABLE "tourist_spot_to_tag" DROP CONSTRAINT "tourist_spot_to_tag_tourist_spot_id_fkey";

-- AlterTable
ALTER TABLE "routes" ALTER COLUMN "place_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "tourist_spots" ALTER COLUMN "place_id" DROP NOT NULL;

-- DropTable
DROP TABLE "tourist_spot_to_tag";

-- CreateTable
CREATE TABLE "_tourist_spot_tag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_tourist_spot_tag_AB_unique" ON "_tourist_spot_tag"("A", "B");

-- CreateIndex
CREATE INDEX "_tourist_spot_tag_B_index" ON "_tourist_spot_tag"("B");

-- AddForeignKey
ALTER TABLE "tourist_spots" ADD FOREIGN KEY ("place_id") REFERENCES "places"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routes" ADD FOREIGN KEY ("place_id") REFERENCES "places"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_tourist_spot_tag" ADD FOREIGN KEY ("A") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_tourist_spot_tag" ADD FOREIGN KEY ("B") REFERENCES "tourist_spots"("id") ON DELETE CASCADE ON UPDATE CASCADE;
