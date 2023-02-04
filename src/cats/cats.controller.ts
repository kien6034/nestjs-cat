import { Body, Controller, Get, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import {Request} from 'express';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    @Get()
    async findAll(@Req() request: Request): Promise<any[]> {
        return []
        
    }

    @Get('ab*cd')
    findAllWildcard() {
    return 'This route uses a wildcard';
    }

    @Get(':id/:id2')
    @HttpCode(200)
    findOne(@Param() params) {
    return `This return a cat with id: ${params.id} ${params.id2}`;
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto): string {
        console.log(createCatDto)
        return 'this add new cats';
        
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
    if (version && version === '5') {
        return { url: 'https://docs.nestjs.com/v5/' };
    }
    }

}
