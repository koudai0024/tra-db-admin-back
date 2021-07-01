import { Controller, Get } from '@nestjs/common';
import { Place } from '@prisma/client';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  async all(): Promise<Place[]> {
    return this.placesService.all();
  }

  @Get(':id')
  async get(id: string): Promise<Place> {
    return this.placesService.get(id);
  }
}
