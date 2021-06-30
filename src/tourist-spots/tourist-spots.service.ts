import { Injectable } from '@nestjs/common';
import { TouristSpot } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TouristSpotsService {
  constructor(private prisma: PrismaService) {}

  async all(): Promise<TouristSpot[]> {
    return this.prisma.touristSpot.findMany({
      include: {
        touristSpotToFacility: {
          select: {
            facility: true,
          },
        },
        touristSpotToTag: {
          select: {
            tag: true,
          },
        },
        touristSpotToStation: {
          select: {
            station: {
              include: {
                route: true,
              },
            },
          },
        },
      },
    });
  }
}
