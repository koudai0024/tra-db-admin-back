import { TouristSpotsService } from './tourist-spots.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Response,
} from '@nestjs/common';
import { TouristSpot } from '@prisma/client';
import { InputTouristSpotDto } from './dto/input-tourist-spot.dto';
import { Response as Res } from 'express';

@Controller('tourist-spots')
export class TouristSpotsController {
  constructor(private readonly touristSpotsService: TouristSpotsService) {}

  @Get()
  async all(@Response() res: Res): Promise<Res<any, Record<string, any>>> {
    const total = await this.touristSpotsService.total();
    const json = await this.touristSpotsService.all();
    return res
      .set({
        'Access-Control-Expose-Headers': 'X-Total-Count',
        'X-Total-Count': total,
      })
      .json(json);
    // return this.touristSpotsService.all();
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<TouristSpot> {
    return this.touristSpotsService.get(id);
  }

  @Post()
  async create(
    @Body() createTouristSpotDto: InputTouristSpotDto,
  ): Promise<TouristSpot> {
    console.log(createTouristSpotDto);
    return this.touristSpotsService.create(createTouristSpotDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: InputTouristSpotDto,
  ): Promise<TouristSpot> {
    console.log(data);
    return this.touristSpotsService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<TouristSpot> {
    return this.touristSpotsService.delete(id);
  }
}
