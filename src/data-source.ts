import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Usuario } from './entity/Usuario';

export const PostgresAppDataSource = new DataSource({
  type: 'postgres',
  host: 'dpg-crh1mp56l47c73c1f6bg-a.virginia-postgres.render.com',
  port: 5432,
  username: 'admintrv',
  password: 'w6Di1sG93ZcUutxvWcWJzoLPdNTjVRDR',
  database: 'travelerhomolog',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});

const SqliteAppDataSource = new DataSource({
  type: 'sqlite',
  database: 'travelerhomolog',
  synchronize: true,
  logging: true,
  entities: [User, Usuario],
  migrations: [],
  subscribers: [],
});

export const AppDataSource =
  process.env.ENV === 'PROD' ? PostgresAppDataSource : SqliteAppDataSource;
