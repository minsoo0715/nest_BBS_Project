import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { bulletin } from './bulletin.entity';
import { BulletinService } from './bulletin.service';
import { BulletinController } from './bulletin.controller';


@Module({
  imports: [TypeOrmModule.forFeature([bulletin])],
  providers: [BulletinService],
  controllers: [BulletinController]
})
export class BulletinModule {}
