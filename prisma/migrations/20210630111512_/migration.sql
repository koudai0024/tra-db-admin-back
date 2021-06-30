-- CreateTable
CREATE TABLE "tourist_spots" (
    "id" TEXT NOT NULL,
    "place_id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "address" TEXT,
    "business_hours" TEXT,
    "holiday" TEXT,
    "official_url" TEXT,
    "image_url" TEXT,
    "remarks" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "places" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "article_to_tourist_spot" (
    "tourist_spot_id" TEXT NOT NULL,
    "article_id" TEXT NOT NULL,

    PRIMARY KEY ("tourist_spot_id","article_id")
);

-- CreateTable
CREATE TABLE "tourist_spot_facility" (
    "tourist_spot_id" TEXT NOT NULL,
    "facility_id" TEXT NOT NULL,

    PRIMARY KEY ("tourist_spot_id","facility_id")
);

-- CreateTable
CREATE TABLE "facilities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tourist_spot_to_tag" (
    "tourist_spot_id" TEXT NOT NULL,
    "tag_id" TEXT NOT NULL,

    PRIMARY KEY ("tourist_spot_id","tag_id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "place_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tourist_spot_to_station" (
    "tourist_spot_id" TEXT NOT NULL,
    "station_id" TEXT NOT NULL,

    PRIMARY KEY ("tourist_spot_id","station_id")
);

-- CreateTable
CREATE TABLE "stations" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "route_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "places.name_unique" ON "places"("name");

-- CreateIndex
CREATE UNIQUE INDEX "facilities.name_unique" ON "facilities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tags.name_unique" ON "tags"("name");

-- CreateIndex
CREATE UNIQUE INDEX "routes.name_unique" ON "routes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "stations.name_route_id_unique" ON "stations"("name", "route_id");

-- AddForeignKey
ALTER TABLE "tourist_spots" ADD FOREIGN KEY ("place_id") REFERENCES "places"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_to_tourist_spot" ADD FOREIGN KEY ("tourist_spot_id") REFERENCES "tourist_spots"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tourist_spot_facility" ADD FOREIGN KEY ("tourist_spot_id") REFERENCES "tourist_spots"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tourist_spot_facility" ADD FOREIGN KEY ("facility_id") REFERENCES "facilities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tourist_spot_to_tag" ADD FOREIGN KEY ("tourist_spot_id") REFERENCES "tourist_spots"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tourist_spot_to_tag" ADD FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routes" ADD FOREIGN KEY ("place_id") REFERENCES "places"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tourist_spot_to_station" ADD FOREIGN KEY ("tourist_spot_id") REFERENCES "tourist_spots"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tourist_spot_to_station" ADD FOREIGN KEY ("station_id") REFERENCES "stations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stations" ADD FOREIGN KEY ("route_id") REFERENCES "routes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
