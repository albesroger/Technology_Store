import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { CreateProductDto } from './DTO/CreateProductDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from 'src/utils/photo/photo.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    readonly productRepository: Repository<Product>,
    @InjectRepository(Photo)
    readonly photoRepository: Repository<Photo>,
  ) {}

  findAllProduct() {
    return this.productRepository.find();
  }

  findById(id: string) {
    return this.productRepository.findOneBy({ id });
  }

  AddProduct(product: CreateProductDto, file: Express.Multer.File[]) {
    const photos = file.map((file) =>
      this.photoRepository.create({
        url: `http://127.0.0.1:3000/static/${file.filename}`,
      }),
    );

    return this.productRepository.save({ ...product, photos });
  }
}
