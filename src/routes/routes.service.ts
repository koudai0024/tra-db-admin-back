import { Injectable } from '@nestjs/common';
import { Route } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
