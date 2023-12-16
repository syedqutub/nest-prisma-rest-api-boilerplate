import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CarService } from './car.service';
import { CarListDto, CreateCarRequestDto, UpdateCarRequestDto } from './car.requet';

@ApiTags('cars')
@Controller('/cars')
export class CarController {
  constructor(private carService: CarService) {}

  @Post('car')
  async create(@Body() req:CreateCarRequestDto):Promise<boolean> {
    
    return await this.carService.create(req);
  }
  
  @Put('car')
  async update(@Body() req:UpdateCarRequestDto) : Promise<boolean> {
    return await this.carService.update(req);
  }

  @Get('/list')
  async getCarList(@Query() request: CarListDto) {
    return await this.carService.carListing(request);
  }
}
