/* eslint-disable prettier/prettier */
import { CvEntity } from 'src/cv/entities/cv.entity/cv.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, DeleteDateColumn } from 'typeorm';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  designation: string;

  @ManyToMany(() => CvEntity, (cv) => cv.skills)
  cvs: CvEntity[];

  @DeleteDateColumn({ nullable: true, default: null })
  deletedAt: Date; // Soft delete column
}
