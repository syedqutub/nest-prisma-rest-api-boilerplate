import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { CreateCarRequestDto } from './car.requet';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCarRequestDto): Promise<boolean> {
   const car = await this.prisma.car.create({
      data:{
        name: data.name,
        year: data.year,
        brand: data.brand,
        engineNo: data.engineNo,
        make: data.make
      },
    });
    
    return true;
  }

}