import * as Joi from "joi";

export const createCatSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  breed: Joi.string().required()
})

export class CreateCatDto {
    public name: string;
    public age: number;
    public breed: string;
  }

