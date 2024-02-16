import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Models3dModule } from './models3d/model3d.module';
import { FileStreamService } from './shared/services/FileStreamService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { Model3d } from './typeorm/entities/Model3d';
import { File } from './typeorm/entities/File';

@Module({
  imports: [
    Models3dModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'Admin',
      password: 'Admin',
      database: 'Models3dDb',
      entities: [User, Model3d, File],
      // autoLoadEntities: true,
      synchronize: true,
      options: { encrypt: false, trustServerCertificate: true },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
