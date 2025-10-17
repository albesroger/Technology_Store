import { Photo } from 'src/utils/photo/photo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, unique: true })
  name: string;

  @Column('float', { nullable: false })
  price: number;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  count: number;

  @Column({ nullable: false })
  category: string;

  @OneToMany(() => Photo, (photo) => photo.product)
  photos: Photo[];
}
