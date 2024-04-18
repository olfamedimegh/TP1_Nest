import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CvController } from './cv/cv.controller';
import { CvService } from './cv/cv.service';
import { CvModule } from './cv/cv.module';
import { UserModule } from './user/user.module';
import * as dotenv from 'dotenv';
import { AuthModule } from './auth/auth.module';
import { SkillService } from './skill/skill.service';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT), 
      username: process.env.DB_USERNAME, 
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      debug: false
    }),
    CvModule,
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
