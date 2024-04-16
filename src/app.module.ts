import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CvController } from './cv/cv.controller';
import { CvService } from './cv/cv.service';
import { CvModule } from './cv/cv.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT), 
      username: process.env.DB_USERNAME, 
      password: '',
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      debug: false
    }),
    CvModule
  ],
  controllers: [AppController, CvController],
  providers: [AppService, CvService],
})
export class AppModule {}
