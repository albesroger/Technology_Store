import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: ['src/database/migrations/*.ts'],
  logging: true,
  synchronize: false,
});