import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cv')
export class CvEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    firstname: string;
  
    @Column()
    age: number;
  
    @Column()
    cin: string;
  
    @Column()
    job: string;
  
    @Column()
    path: string;
}
