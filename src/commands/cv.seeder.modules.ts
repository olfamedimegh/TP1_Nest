import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { SkillService } from '../skill/skill.service';
import { CvService } from '../cv/cv.service';
import { AppModule } from '../app.module';
import { CvEntity } from '../cv/entities/cv.entity/cv.entity';
import { UserEntity } from '../user/entities/user.entity/user.entity';
import { Skill } from '../skill/entities/skill.entity';


@Module({
  imports: [TypeOrmModule.forFeature([CvEntity,UserEntity,Skill])],
  providers: [AppModule,CvService, UserService,SkillService],
  exports:[CvSeederModule], 
})
export class CvSeederModule {}
