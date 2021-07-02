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
              name: data.place,
            },
            create: {
              name: data.place,
            },
          },
        },
        touristSpotToFacility: {
          disconnect: {},
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
          disconnect: {},
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

  async delete(id: string): Promise<TouristSpot> {
    this.prisma.touristSpot.update({
      where: {
        id: id,
      },
      data: {
        touristSpotToFacility: {
          disconnect: {},
        },
        touristSpotToTag: {
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
