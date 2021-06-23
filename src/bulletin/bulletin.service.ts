import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { bulletin } from './bulletin.entity';
import {CreateBulletinDto} from './bulletinDto'

@Injectable()
export class BulletinService {
    constructor(
        @InjectRepository(bulletin)
        private bulletinsRepository: Repository<bulletin>,
    ) {}

    findAll(): Promise<bulletin[]>{
        return this.bulletinsRepository.find();
    }

    findOne(id: number): Promise<bulletin>{
        return this.bulletinsRepository.findOne(id);       
    }

    create(bbs:CreateBulletinDto):Promise<bulletin> {
        const newBbs:bulletin = this.bulletinsRepository.create(bbs)
        return this.bulletinsRepository.save(newBbs);
    }
    
    delete(_id: number):Promise<DeleteResult>{
        return this.bulletinsRepository.delete({id: _id});
    }



}
