import { Injectable } from '@nestjs/common';
import { TouristSpot } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTouristSpotDto } from './dto/create-tourist-spot.dto';

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

  async get(id: string): Promise<TouristSpot> {
    return this.prisma.touristSpot.findUnique({
      where: {
        id: id,
      },
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

  async create(data: CreateTouristSpotDto): Promise<TouristSpot> {
    return this.prisma.touristSpot.create({
      data: {
        name: data.name,
        description: data?.description,
        address: data?.address,
        businessHours: data?.businessHours,
        holiday: data?.holiday,
        officialUrl: data?.officialUrl,
        imageUrl: data?.imageUrl,
        remarks: data?.remarks,
        place: {
          connectOrCreate: {
            where: {
              name: data.place,
            },
            create: {
              name: data.place,
            },
          },
        },
        touristSpotToFacility: {
          create: data.facilities?.map((facility) => {
            return {
              facility: {
                connectOrCreate: {
                  where: { name: facility },
                  create: { name: facility },
                },
              },
            };
          }),
        },
        touristSpotToTag: {
          create: data.tags?.map((tag) => {
            return {
              tag: {
                connectOrCreate: {
                  where: { name: tag },
                  create: { name: tag },
                },
              },
            };
          }),
        },
      },
      include: {
        touristSpotToFacility: {
          include: {
            facility: true,
          },
        },
        touristSpotToTag: {
          include: {
            tag: true,
          },
        },
      },
    });
  }
}
