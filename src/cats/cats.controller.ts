import { Body, Controller, Get, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import {Request} from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from 'src/interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService){}

    @Post()
    async create(@Body() createCatDto: CreateCatDto){
        this.catsService.create(createCatDto)
    }

    @Get()
    async findAll(): Promise<Cat[]>{
        return this.catsService.findAll();
    }
}
