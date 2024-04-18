import { CvEntity } from "src/cv/entities/cv.entity/cv.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => CvEntity, (cv) => cv.user)
  cvs: CvEntity[];

  @DeleteDateColumn({ nullable: true, default: null })
  deletedAt: Date; // Soft delete column

}
