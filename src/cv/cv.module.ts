import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CvEntity } from './entities/cv.entity/cv.entity';
import { CvController } from './cv.controller';
import { CvService } from './cv.service';

@Module({
    imports: [TypeOrmModule.forFeature([CvEntity])],
    controllers: [CvController],
    providers: [CvService]
})
export class CvModule {}
