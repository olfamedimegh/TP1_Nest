import { Skill } from "src/skill/entities/skill.entity";
import { UserEntity } from "src/user/entities/user.entity/user.entity";
import { Column, DeleteDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @ManyToOne(() => UserEntity, (user) => user.cvs, { eager: true })
    user: UserEntity;
  
    @DeleteDateColumn({ nullable: true, default: null })
    deletedAt: Date; // Soft delete column
  
    @ManyToMany(() => Skill, null, { eager: true })
    @JoinTable()
    skills: Skill[];
}
