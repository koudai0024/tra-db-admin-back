import { Injectable } from '@nestjs/common';
import { Route } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { InputRouteDto } from './dto/input-route.dto';

@Injectable()
export class RoutesService {
  constructor(private readonly prisma: PrismaService) {}

  async all(): Promise<Route[]> {
    return this.prisma.route.findMany({
      include: {
        place: true,
      },
    });
  }

  async get(id: string): Promise<Route> {
    return this.prisma.route.findUnique({
      where: {
        id: id,
      },
      include: {
        place: true,
      },
    });
  }

  async create(data: InputRouteDto): Promise<Route> {
    return this.prisma.route.create({
      data: {
        name: data.name,
        place: {
          connectOrCreate: {
            where: { name: data.place },
            create: { name: data.place },
          },
        },
      },
    });
  }

  async delete(id: string): Promise<Route> {
    return this.prisma.route.delete({
      where: {
        id: id,
      },
      include: {
        place: true,
      },
    });
  }
}
