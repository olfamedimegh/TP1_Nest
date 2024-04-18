import { NestFactory } from '@nestjs/core';
import { CvService } from '../cv/cv.service';
import { SkillService } from '../skill/skill.service';
import { UserService } from '../user/user.service';
import {
    randPassword,
    randDirectoryPath,
    randEmail,
    randFirstName,
    randJobTitle,
    randNumber,
    randUserName,
  } from '@ngneat/falso';

  import { CvSeederModule } from './cv.seeder.modules';
  import { TypeOrmModule } from '@nestjs/typeorm';
  
async function bootstrap() {
    const app = await NestFactory.createApplicationContext(CvSeederModule);
  
  // creation d'un random user 
  const userService: UserService = app.get(UserService);
  const userId = randNumber({min:0, max:99999999});
  const user = {userId : userId ,  username: randUserName() ,email: randEmail(), password: randPassword()};
  userService.create(user);

  // creation des random skills
  const skillService: SkillService = app.get(SkillService);
  const skillsIds = [
    randNumber({min:0, max:99999999}),
    randNumber({min:0, max:99999999}),
  ];
    const skills = [ 
        {
          skillId : skillsIds[0],
          designation: randJobTitle()
        },
        {
          skillId : skillsIds[1],
          designation: randJobTitle()
        },
    ];
    skills.forEach(skill => skillService.create(skill));

    // creation de random cv
    const cvService: CvService = app.get(CvService);
    const cv = {
        name: randJobTitle(),
        firstname: randFirstName(),
        age: randNumber({min:18, max:100}), 
        path: randDirectoryPath(),
        job : randJobTitle(),
        cin: randNumber({min:10000000, max:99999999}).toString(),
        userId: userId ,
        skillsIds : skillsIds,         
    };
    cvService.addCv(cv); 

    console.log("this cv was added succesfully ! ");
    console.log(cv);

}
bootstrap();
