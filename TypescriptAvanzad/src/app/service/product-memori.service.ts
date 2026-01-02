import { faker } from "@faker-js/faker";

import { Product } from "../models/product.model";
import { ProductService } from "./product-service.model";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
export const products: Product[] = [];


export  class MemoriProductService implements ProductService{
    // **PROPIEDADES**
    private products : Product[] = [];

    // **METODOS**
    create(data: CreateProductDto){
        const newProduct = {
            ...data,
            id: faker.number.int(),
            category:{
                id: data.categoryId,
                name: faker.commerce.department(),
                image: faker.image.url()
            }
        }

        return this.add(newProduct)
    }

    add(product: Product){
        this.products.push(product);
        return product;
    }

    // actualizar
    update(id: Product['id'], changes: UpdateProductDto): Product {
        const index = this.products.findIndex((item)=> item.id === id);

        if(index === -1){
            throw new Error("Producto no encontrado")
        }

        Object.assign(this.products[index]!, changes)
        return this.products[index]!;
    }


    findOne(id: Product['id']){
        try{
            const product = this.products.find(item => item.id === id);
            if(!product){
                throw new Error("Producto no encontrado")
            }
            return product;
        }catch(error){
            console.log(error)
        };
    }

    getAll(){
        return this.products;
    }
}

