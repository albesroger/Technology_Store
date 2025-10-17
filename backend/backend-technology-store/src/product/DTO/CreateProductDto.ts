import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @Type(() => Number)
  @IsNumber()
  readonly price: number;

  @Type(() => Number)
  @IsNumber()
  readonly count: number;

  @IsString()
  readonly description: string;

  @IsString()
  readonly category: string;
}
