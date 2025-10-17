import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { Photo } from 'src/utils/photo/photo.entity';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/guard/roles.guard';
import { ProductController } from './product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Photo])],
  providers: [ProductService, {
      provide: APP_GUARD,
      useClass: RolesGuard,
    }],
    controllers:[ProductController]
})
export class ProductModule {}
