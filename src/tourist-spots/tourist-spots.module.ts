import { Module } from '@nestjs/common';
import { TouristSpotsService } from './tourist-spots.service';
import { TouristSpotsController } from './tourist-spots.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [TouristSpotsService, PrismaService],
  controllers: [TouristSpotsController],
})
export class TouristSpotsModule {}
