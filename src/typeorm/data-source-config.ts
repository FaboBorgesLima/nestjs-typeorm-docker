import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
import entities from './entities';

export default (() => {
  config();

  const options = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? ''),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: entities,
    synchronize: false,
    migrationsRun: true,
    logging: process.env.DB_LOGGING == 'true',
  };

  if (process.env.NODE_ENV == 'test') {
    return {
      ...options,
      migrations: ['src/typeorm/migrations/*.ts'],
    } as TypeOrmModuleOptions;
  }

  return {
    ...options,
    migrations: ['dist/typeorm/migrations/*.js'],
  } as TypeOrmModuleOptions;
})();
