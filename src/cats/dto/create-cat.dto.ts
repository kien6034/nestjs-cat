import * as Joi from 'joi';
import { IsString, IsInt, IsNumber } from 'class-validator';

export const createCatSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  breed: Joi.string().required(),
});

export class CreateCatDto {
  @IsString()
  public name: string;

  @IsNumber()
  public age: number;

  @IsString()
  public breed: string;
}
