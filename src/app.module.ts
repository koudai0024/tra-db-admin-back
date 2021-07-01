import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { TouristSpotsModule } from './tourist-spots/tourist-spots.module';
import { StationsModule } from './stations/stations.module';
import { RoutesModule } from './routes/routes.module';

@Module({
  imports: [PrismaModule, TouristSpotsModule, StationsModule, RoutesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
