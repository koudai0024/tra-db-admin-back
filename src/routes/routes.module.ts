import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [RoutesService, PrismaService],
  controllers: [RoutesController],
})
export class RoutesModule {}
