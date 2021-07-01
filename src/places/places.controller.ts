import { Controller, Delete, Get, Post } from '@nestjs/common';
import { Place } from '@prisma/client';
import { InputPlaceDto } from './dto/input-place.dto';
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

  @Post()
  async cerate(data: InputPlaceDto): Promise<Place> {
    return this.placesService.create(data);
  }

  @Delete(':id')
  async delete(id: string): Promise<Place> {
    return this.placesService.delete(id);
  }
}
