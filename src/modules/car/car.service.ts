import { Injectable } from '@nestjs/common';
import { Post, Prisma, User } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { CarListDto, CreateCarRequestDto, UpdateCarRequestDto } from './car.requet';
import { CarResponseDto, CarListResponseDto } from './car.response';

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
  async carListing(data: CarListDto) :Promise<CarListResponseDto> {
    let {page,limit} = data;
    page = parseInt(`${page}`);
    page = parseInt(`${page}`);
    limit = parseInt(`${limit}`)

    // how many records you want to skip
    let offset = page <=1 ? 0 : (page-1) * limit;
    let filter:Prisma.CarWhereInput = {};
    if(data.search) {
      filter.OR = [
        {name: {
          contains: data.search
        }},
        {
          make: {
            contains: data.search
          }
        }
      ];
    }

    const cars = await this.prisma.car.findMany({
      where: filter,
      orderBy:{
        id:'asc'
      },
      skip: offset,
      take: limit

    });
    const totalRecords = await this.prisma.car.count({where:filter});
    return {
      totalRecords,
      currentPage:page,
      limit,
      results: cars
    };
  }
}
