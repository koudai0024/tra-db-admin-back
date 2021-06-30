import { TouristSpotsService } from './tourist-spots.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { TouristSpot } from '@prisma/client';
import { CreateTouristSpotDto } from './dto/create-tourist-spot.dto';

@Controller('tourist-spots')
export class TouristSpotsController {
  constructor(private readonly touristSpotsService: TouristSpotsService) {}

  @Get('all')
  async all(): Promise<TouristSpot[]> {
    return this.touristSpotsService.all();
  }

  @Post('create')
  async create(
    @Body() createTouristSpotDto: CreateTouristSpotDto,
  ): Promise<TouristSpot> {
    return this.touristSpotsService.create(createTouristSpotDto);
  }
}
