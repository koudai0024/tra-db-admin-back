import { TouristSpotsService } from './tourist-spots.service';
import { Controller, Get } from '@nestjs/common';
import { TouristSpot } from '@prisma/client';

@Controller('tourist-spots')
export class TouristSpotsController {
  constructor(private readonly touristSpotsService: TouristSpotsService) {}

  @Get('all')
  async all(): Promise<TouristSpot[]> {
    return this.touristSpotsService.all();
  }
}
