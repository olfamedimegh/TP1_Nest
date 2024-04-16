import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CvEntity } from './entities/cv.entity/cv.entity';
import { AddCvDto } from './dto/Add-cv.dto';
import { UpdateCvDto } from './dto/Update-cv.dto';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { FindCvsDto } from './dto/find-cvs.dto';

@Injectable()
export class CvService {
    
    constructor(
        @InjectRepository(CvEntity)
        private cvRepository : Repository<CvEntity> 
    ){}

   async getCvs(): Promise<CvEntity[]> {
    return await this.cvRepository.find();
   }

   async findOne(id: number) :Promise<CvEntity> {
    const cv=await this.cvRepository.findOne({where: {id}});
    if (!cv){
      throw new NotFoundException(`le cv d'id ${id} n'existe pas` );
    }
    return cv;
    }
   async addCv(cv: AddCvDto): Promise<CvEntity> {
     return await this.cvRepository.save(cv);
    }

    async updateCv(id: number, updatedcv:UpdateCvDto): Promise<CvEntity> {
        const  newCv = await this.cvRepository.preload({
            id: id,
            ...updatedcv});
        if (newCv) {
          return this.cvRepository.save(newCv);
        } else {
          throw new NotFoundException('this cv do not exist');
        }
    }
    
    async softDeleteCv(id: number) {
    console.log(id);
    return await this.cvRepository.softDelete(id);
    }
  
    async restoreCv(id: number) {
    return await this.cvRepository.restore(id);
    }
  
    async findByAgeCritere(critereChoix: FindCvsDto) {
        console.log(critereChoix);
        const { age, critere } = critereChoix;
      
        return await this.cvRepository.createQueryBuilder('cv')
        .where('cv.name LIKE :critere', { critere: `%${critere}%` })
        .orWhere('cv.firstname LIKE :critere', { critere: `%${critere}%` })
        .orWhere('cv.job LIKE :critere', { critere: `%${critere}%` })
        .orWhere('cv.age = :age', { age: age })
        .getRawMany();
      }
}
