-- DropForeignKey
ALTER TABLE "routes" DROP CONSTRAINT "routes_place_id_fkey";

-- DropForeignKey
ALTER TABLE "stations" DROP CONSTRAINT "stations_route_id_fkey";

-- DropForeignKey
ALTER TABLE "tourist_spots" DROP CONSTRAINT "tourist_spots_place_id_fkey";

-- AddForeignKey
ALTER TABLE "tourist_spots" ADD FOREIGN KEY ("place_id") REFERENCES "places"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routes" ADD FOREIGN KEY ("place_id") REFERENCES "places"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stations" ADD FOREIGN KEY ("route_id") REFERENCES "routes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
