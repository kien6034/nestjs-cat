import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cat } from 'src/interfaces/cat.interface';
import { ForbiddenException } from 'src/common/exceptions/forbidden.exception';


@Injectable()
export class CatsService {
    private readonly cats: Cat[] = []

    create(cat: Cat){
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats
    }
}
