import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCarRequestDto{
    
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

export class UpdateCarRequestDto extends CreateCarRequestDto {
    @ApiProperty()
    @IsInt()
    id:number;
}

export class CarListDto {
    @ApiProperty()
    page: number = 1;

    @ApiProperty()
    limit: number = 10;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    search: string;
}