import { Injectable } from '@nestjs/common';
import { Place } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { InputPlaceDto } from './dto/input-place.dto';

@Injectable()
export class PlacesService {
  constructor(private readonly prisma: PrismaService) {}

  async all(): Promise<Place[]> {
    return this.prisma.place.findMany({});
  }

  async get(id: string): Promise<Place> {
    return this.prisma.place.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create(data: InputPlaceDto): Promise<Place> {
    return this.prisma.place.create({
      data: {
        name: data.name,
      },
    });
  }

  async delete(id: string): Promise<Place> {
    return this.prisma.place.delete({
      where: {
        id: id,
      },
    });
  }
}
