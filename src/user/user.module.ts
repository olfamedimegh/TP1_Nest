import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { AdminGuard } from '../auth/guards/admin.guard';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), JwtModule],
  controllers: [UserController],
  providers: [UserService, AdminGuard],
  //ajouté pour l'exportation du service, pour pouvoir l'utiliser dans d'autres modules
  // tq le module seed
  exports: [ UserService, TypeOrmModule.forFeature([UserEntity])],

})
export class UserModule {}
