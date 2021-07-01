import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { TouristSpotsModule } from './tourist-spots/tourist-spots.module';
import { StationsModule } from './stations/stations.module';

@Module({
  imports: [PrismaModule, TouristSpotsModule, StationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
