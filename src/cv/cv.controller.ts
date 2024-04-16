import { Controller } from '@nestjs/common';
import { Delete, Get, Patch, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { CvService } from './cv.service';
import { CvEntity } from './entities/cv.entity/cv.entity';
import { AddCvDto } from './dto/Add-cv.dto';
import { Body, Param, Query } from '@nestjs/common/decorators/http/route-params.decorator';
import { UpdateCvDto } from './dto/Update-cv.dto';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { FindCvsDto } from './dto/find-cvs.dto';

@Controller('cv')
export class CvController {

    constructor(
        private cvService: CvService
    ){}

    @Post()
    async create(@Body() addCvDto: AddCvDto): Promise<CvEntity> {
    return await this.cvService.addCv(addCvDto);
    }

    @Get()
    async getAllCvs(): Promise<CvEntity[]>{
        return await this.cvService.getCvs();        
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
    return await this.cvService.findOne(+id);
    }

    @Get('find')
    async findByAgeCritere(@Query() critere: FindCvsDto): Promise<CvEntity[]> {
      console.log(critere);
      return this.cvService.findByAgeCritere(critere);
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateCvDto: UpdateCvDto,
    ): Promise<CvEntity> {
    return await this.cvService.updateCv(+id, updateCvDto);
    }

    @Delete(':id')
    async deleteCv(@Param('id', ParseIntPipe) id: number) {
    return await this.cvService.softDeleteCv(id);
    }

    @Get('restore/:id')
    async restoreCv(@Param('id', ParseIntPipe) id: number) {
    return await this.cvService.restoreCv(id);
    }
}
