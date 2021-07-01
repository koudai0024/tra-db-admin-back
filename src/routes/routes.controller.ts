import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Route } from '@prisma/client';
import { InputRouteDto } from './dto/input-route.dto';
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

  @Post()
  async create(@Body() data: InputRouteDto): Promise<Route> {
    return this.routesService.create(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Route> {
    return this.routesService.delete(id);
  }
}
