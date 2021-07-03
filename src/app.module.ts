import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { TouristSpotsModule } from './tourist-spots/tourist-spots.module';
import { StationsModule } from './stations/stations.module';
import { RoutesModule } from './routes/routes.module';
import { PlacesModule } from './places/places.module';

@Module({
  imports: [
    PrismaModule,
    TouristSpotsModule,
    StationsModule,
    RoutesModule,
    PlacesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
