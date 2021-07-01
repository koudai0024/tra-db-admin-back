import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Post()
  async create(@Body() data: InputStationDto): Promise<Station> {
    return this.stationsService.create(data);
  }
}
