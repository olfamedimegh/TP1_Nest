import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class AddUserDto {
   
    @IsString()
    @IsNotEmpty()
    username:string;
    
    @IsEmail()
    @IsNotEmpty()
    email:string;
    
    @IsStrongPassword()
    @IsNotEmpty()
    password:string;

}