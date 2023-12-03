import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { CreateCarRequestDto, UpdateCarRequestDto } from './car.requet';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateCarRequestDto): Promise<boolean> {
    const car = await this.prisma.car.create({
      data: {
        name: data.name,
        year: data.year,
        brand: data.brand,
        engineNo: data.engineNo,
        make: data.make
      },
    });

    return true;
  }
  async update(data: UpdateCarRequestDto): Promise<boolean> {
    const car = await this.prisma.car.update({
      where: {id:data.id},
      data: {
        name: data.name,
        year: data.year,
        brand: data.brand,
        engineNo: data.engineNo,
        make: data.make
      }
    })
    return true;
  }
}
