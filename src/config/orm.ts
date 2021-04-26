import * as path from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();
const options: TypeOrmModuleOptions = {
  name: 'default',
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity{ .ts,.js}'],
  migrations: [path.resolve(__dirname, '..', 'db', 'migrations', '*')],
  cli: {
    migrationsDir: path.resolve(__dirname, '..', 'db', 'migrations'),
  },
};

module.exports = options;
