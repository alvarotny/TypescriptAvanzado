import { UpdateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";
import { ProductHttpService } from "./product-http2.service";
import { validate } from "class-validator";

export class ProductCrudService{
    private url = 'https://api.escuelajs.co/api/v1/products';
    private htpp = new ProductHttpService(this.url)
    
    async update(id: Product['id'], dto: UpdateProductDto){
        validate(dto)
        this.htpp.requestTwo()
        return this.htpp.update(id, dto)
    }

}