import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from './entities/user.entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AddUserDto } from './dto/Add-user.dto';
import { UpdateUserDto } from './dto/Update-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
      ) {}
      
      async create(newUser: AddUserDto):Promise<UserEntity> {
        return await this.userRepository.save(newUser);
      }
    
      async findAll():Promise<UserEntity[]> {
        return await this.userRepository.find();
      }
      
      async findOne(id: number) :Promise<UserEntity> {
        const user=await this.userRepository.findOne({where: {id}});
        if (!user){
          throw new NotFoundException(`le user d'id ${id} n'existe pas` );
       }
       return await user;
      }
    
      async update(id: number, updatedUser:UpdateUserDto): Promise<UserEntity> {
        const  newUser = await this.userRepository.preload({id,...updatedUser,});
        if (newUser) {
          return await this.userRepository.save(newUser);
        } else {
          throw new NotFoundException('user inexistant');
        }
    }
     
    async softDeleteUser(id: number) {
      console.log(id);
      return await this.userRepository.softDelete(id);
    }
    
     async restoreUser(id: number) {
      return await this.userRepository.restore(id);
    }
    }
