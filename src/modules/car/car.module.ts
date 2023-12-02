import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CarService } from './car.service';
import { CarController } from './car.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CarController],
  providers: [CarService],
  exports: [CarService],
})
export class CarModule {}
