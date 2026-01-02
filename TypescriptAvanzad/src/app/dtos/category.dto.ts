import { IsEmail,IsEnum,isNotEmpty,IsNotEmpty,IsOptional,IsUrl, Length, validateOrReject } from 'class-validator'

import { AccesType, Category } from "../models/category.model";
export interface CreateCategory extends Omit<Category, 'id'>{}
export class CategoryModel implements CreateCategory{
    @IsNotEmpty()
    @Length(4,140)
    name!: string;
    @IsUrl()
    @IsNotEmpty()
    image!: string;
    @IsOptional()
    @IsEnum(AccesType)
    access?: AccesType  | undefined;
}

(async () =>{
    try{
        const dto = new CategoryModel();
        dto.name = 'a234arwqerw';
        dto.image = 'https://api.escuelajs.co/api/v1/products';
        await validateOrReject(dto)
    }catch(error){
        console.log(error)
    }

})()