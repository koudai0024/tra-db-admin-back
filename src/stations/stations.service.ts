import { Station } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InputStationDto } from './dto/input-station.dto';

@Injectable()
export class StationsService {
  constructor(private readonly prisma: PrismaService) {}

  async all(): Promise<Station[]> {
    return this.prisma.station.findMany({
      include: {
        route: {
          include: {
            place: true,
          },
        },
      },
    });
  }

  async create(data: InputStationDto): Promise<Station> {
    return this.prisma.station.create({
      data: {
        name: data.name,
        route: {
          connect: { name: data.route },
        },
      },
      include: {
        route: {
          include: {
            place: true,
          },
        },
      },
    });
  }
}
