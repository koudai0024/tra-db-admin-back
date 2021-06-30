import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { TouristSpotsModule } from './tourist-spots/tourist-spots.module';

@Module({
  imports: [PrismaModule, TouristSpotsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
