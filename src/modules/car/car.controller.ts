import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CarService } from './car.service';
import { CreateCarRequestDto } from './car.requet';

@ApiTags('cars')
@Controller('/cars')
export class CarController {
  constructor(private carService: CarService) {}

  @Post('car')
  async creaet(@Body() req:CreateCarRequestDto):Promise<boolean> {
    
    return await this.carService.create(req);
  }
}
