/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { AddCvDto } from './add-cv.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCvDto extends PartialType(AddCvDto) {
    @IsOptional()
    @IsString()
    name:string;
   
    @IsOptional()
    @IsString()
    firstname:string;
   
    @IsOptional()
    @IsNumber()
    age:number;
    
    @IsOptional()
    @IsString()
    path:string;
   
    @IsOptional()
    @IsString()
    job:string;
    
    @IsOptional()
    @IsNumber()
    cin:string;
}