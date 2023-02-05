import { Body, Controller, ForbiddenException, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Query, Redirect, Req, UseFilters, UsePipes } from '@nestjs/common';
import {Request} from 'express';
import { CreateCatDto, createCatSchema } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from 'src/interfaces/cat.interface';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { JoiValidationPipe } from 'src/common/pipe/joi-validation.pipe';

//@UseFilters(HttpExceptionFilter)
@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService){}

    @Post()
    // If we pass an instance (new HttpExeception), it is a method scope 
    // If we pass the class instead of instance (HttpException), the framework will instantiate it and enable dependency injection  
    @UseFilters(new HttpExceptionFilter)
    @UsePipes(new JoiValidationPipe(createCatSchema))
    async create(@Body() createCatDto: CreateCatDto){
        this.catsService.create(createCatDto)
    }

    @Get(':id')
    //'id', ParseIntPipe
    async findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode:  HttpStatus.NOT_ACCEPTABLE})) id: number) {
        return this.catsService.findOne(id);
    }


    @Get()
    async findAll(@Body() data:any): Promise<Cat[]>{
        console.log("Data after middleware: ", data);
        return this.catsService.findAll();
    }
}
