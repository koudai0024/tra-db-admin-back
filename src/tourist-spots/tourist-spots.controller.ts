import { TouristSpotsService } from './tourist-spots.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TouristSpot } from '@prisma/client';
import { CreateTouristSpotDto } from './dto/create-tourist-spot.dto';

@Controller('tourist-spots')
export class TouristSpotsController {
  constructor(private readonly touristSpotsService: TouristSpotsService) {}

  @Get('all')
  async all(): Promise<TouristSpot[]> {
    return this.touristSpotsService.all();
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<TouristSpot> {
    return this.touristSpotsService.get(id);
  }

  @Post()
  async create(
    @Body() createTouristSpotDto: CreateTouristSpotDto,
  ): Promise<TouristSpot> {
    return this.touristSpotsService.create(createTouristSpotDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<TouristSpot> {
    return this.touristSpotsService.delete(id);
  }
}
