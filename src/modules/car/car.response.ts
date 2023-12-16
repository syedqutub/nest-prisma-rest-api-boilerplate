import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNumber, IsString } from "class-validator";
import { CarListDto } from "./car.requet";

export class CarListResponseDto {
    totalRecords:number;
    currentPage:number;
    limit:number;
    results: CarResponseDto[];
}

export class CarResponseDto{
    @ApiProperty()
    @IsInt()
    id:number;
    
    @ApiProperty()
    @IsString()
    name:string;
    @ApiProperty()
    
    @IsString()
    make:string;
    
    @ApiProperty()
    @IsInt()
    year:number;
    
    @ApiProperty()
    @IsString()
    brand:string;
    
    @ApiProperty()
    @IsInt()
    engineNo:number;   
}
