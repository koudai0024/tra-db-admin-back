import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { StationsService } from './stations.service';
import { Station } from '@prisma/client';
import { InputStationDto } from './dto/input-station.dto';

@Controller('stations')
export class StationsController {
  constructor(private readonly stationsService: StationsService) {}

  @Get('all')
  async all(): Promise<Station[]> {
    return this.stationsService.all();
  }

  @Get(':id')
  async get(id: string): Promise<Station> {
    return this.stationsService.get(id);
  }

  @Post()
  async create(@Body() data: InputStationDto): Promise<Station> {
    return this.stationsService.create(data);
  }

  @Delete(':id')
  async delete(id: string): Promise<Station> {
    return this.stationsService.delete(id);
  }
}
