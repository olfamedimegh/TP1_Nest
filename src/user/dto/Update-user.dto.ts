/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { AddUserDto } from './Add-user.dto';

export class UpdateUserDto extends PartialType(AddUserDto) {
    @IsString()
    @IsOptional()
    username:string;
    
    
    @IsEmail()
    @IsOptional()
    email:string;
    
    
    @IsString()
    @IsOptional()
    password:string;
}