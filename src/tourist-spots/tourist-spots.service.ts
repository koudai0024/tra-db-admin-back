import { Injectable } from '@nestjs/common';
import { TouristSpot } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { InputTouristSpotDto } from './dto/input-tourist-spot.dto';

@Injectable()
export class TouristSpotsService {
  constructor(private prisma: PrismaService) {}

  async total(): Promise<number> {
    return this.prisma.touristSpot.count();
  }

  async all(): Promise<TouristSpot[]> {
    return this.prisma.touristSpot.findMany({
      include: {
        place: true,
        facilities: true,
        tags: true,
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
        place: true,
        facilities: true,
        tags: true,
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

  async create(data: InputTouristSpotDto): Promise<TouristSpot> {
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
              name: data.place.name,
            },
            create: {
              name: data.place.name,
            },
          },
        },
        facilities: {
          connectOrCreate: data.facilities?.map((facility) => {
            return {
              where: { name: facility.name },
              create: { name: facility.name },
            };
          }),
        },
        tags: {
          connectOrCreate: data.tags?.map((tag) => {
            return {
              where: { name: tag.name },
              create: { name: tag.name },
            };
          }),
        },
      },
      include: {
        facilities: true,
        tags: true,
      },
    });
  }

  async update(id: string, data: InputTouristSpotDto): Promise<TouristSpot> {
    return this.prisma.touristSpot.update({
      where: {
        id: id,
      },
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
              name: data.place.name,
            },
            create: {
              name: data.place.name,
            },
          },
        },
        facilities: {
          disconnect: {},
          connectOrCreate: data.facilities?.map((facility) => {
            return {
              where: { name: facility.name },
              create: { name: facility.name },
            };
          }),
        },
        tags: {
          disconnect: {},
          connectOrCreate: data.tags?.map((tag) => {
            return {
              where: { name: tag.name },
              create: { name: tag.name },
            };
          }),
        },
      },
      include: {
        facilities: true,
        tags: true,
      },
    });
  }

  async delete(id: string): Promise<TouristSpot> {
    this.prisma.touristSpot.update({
      where: {
        id: id,
      },
      data: {
        facilities: {
          disconnect: {},
        },
        tags: {
          disconnect: {},
        },
        touristSpotToStation: {
          disconnect: {},
        },
      },
    });
    return this.prisma.touristSpot.delete({
      where: {
        id: id,
      },
      include: {
        facilities: true,
        tags: true,
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
