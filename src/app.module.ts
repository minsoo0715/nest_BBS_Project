import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {bulletin} from './bulletin/bulletin.entity';
import { BulletinModule } from './bulletin/bulletin.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password:'7334',
      database: 'dimigo',
      entities: [bulletin],
      synchronize: true,
    }),
    BulletinModule
  ],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
