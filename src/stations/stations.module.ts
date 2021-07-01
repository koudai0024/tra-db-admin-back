import { Module } from '@nestjs/common';
import { StationsService } from './stations.service';
import { StationsController } from './stations.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [StationsService, PrismaService],
  controllers: [StationsController],
})
export class StationsModule {}
