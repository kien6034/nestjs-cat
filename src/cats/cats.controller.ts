import { Body, Controller, ForbiddenException, Get, HttpCode, Param, Post, Query, Redirect, Req, UseFilters } from '@nestjs/common';
import {Request} from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from 'src/interfaces/cat.interface';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';

//@UseFilters(HttpExceptionFilter)
@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService){}

    @Post()
    // If we pass an instance (new HttpExeception), it is a method scope 
    // If we pass the class instead of instance (HttpException), the framework will instantiate it and enable dependency injection  
    @UseFilters(new HttpExceptionFilter)
    async create(@Body() createCatDto: CreateCatDto){
        throw new ForbiddenException()
        this.catsService.create(createCatDto)
    }

    @Get()
    async findAll(@Body() data:any): Promise<Cat[]>{
        console.log("Data after middleware: ", data);
        return this.catsService.findAll();
    }
}
