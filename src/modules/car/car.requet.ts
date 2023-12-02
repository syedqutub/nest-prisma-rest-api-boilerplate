import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNumber, IsString } from "class-validator";

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