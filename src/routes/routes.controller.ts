import { Controller, Get, Param } from '@nestjs/common';
import { Route } from '@prisma/client';
import { RoutesService } from './routes.service';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Get('all')
  async all(): Promise<Route[]> {
    return this.routesService.all();
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<Route> {
    return this.routesService.get(id);
  }
}
