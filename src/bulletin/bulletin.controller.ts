import { Body, Controller, Delete, Get, Header, Post, Res } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { bulletin } from './bulletin.entity';
import { BulletinService } from './bulletin.service';
import { CreateBulletinDto, DeleteBulletinDto } from './bulletinDto';

@Controller('bulletins')
export class BulletinController {

    constructor(private readonly bulletinService: BulletinService) {}

    @Post('/')
    @Header("Content-Type", "application/json")
    async CreateBulletins(@Body() inputBody:CreateBulletinDto) {
        console.log(inputBody)
        let dt = await this.bulletinService.create(inputBody)       
        return dt; 
    }

    @Get('/')
    async GetBulletins() {
    
        let blt = await this.bulletinService.findAll()
        let rtd = {data: blt}
        console.log(rtd);   
        return rtd;
    }

    @Delete('/')
    async deleteBulletins(@Body() inputBody:DeleteBulletinDto) {
        let b:DeleteResult = await this.bulletinService.delete(inputBody.id)
        return b;
    }
    


}
