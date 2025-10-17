import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Roles } from 'src/utils/decorators/roles.decorator';
import { Role } from 'src/types/roles.enum';
import { CreateUserDto } from 'src/user/DTO/CreateUserDto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerConfig } from 'src/utils/multer.config';
import { CreateProductDto } from './DTO/CreateProductDto';

@Controller('product')
export class ProductController {
  constructor(readonly productService: ProductService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  GetAllProduct() {
    return this.productService.findAllProduct();
  }

  @Get(':id')
  GetProductById(@Param('id') id: string) {
    return this.productService.findById(id);
  }

  @Post()
  //@Roles(Role.Admin)
  @UseInterceptors(FilesInterceptor('photos', 5, multerConfig))
  async createProduct(
    @Body() product: CreateProductDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    return await this.productService.AddProduct(product, files);
  }
}
