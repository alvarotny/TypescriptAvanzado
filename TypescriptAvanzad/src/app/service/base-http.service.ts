
import axios from "axios";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";
import { UpdateProductDto } from "../dtos/product.dto";

// Tipo dinamico
export class BaseHttpService<TypeClass>{
    // **ATRIBUTO**
    public data: TypeClass[] = [];

    // **CONSTRUCTOR**
    constructor(protected url: string){}

    // **METODOS**
    async getAll(){
        const {data} = await axios.get<TypeClass[]>(this.url);
        return data;
    }
    // **Tipado dentro de un metodo**
    async update<ID, DTO>(id: ID, changes: DTO) {
        const { data } = await axios.put(`${this.url}/${id}`, changes);
        return data;
    }

    // getAll(): TypeClass[] | Promise<TypeClass[]>{
    //     return []
    // }
    
}
(async () =>{
    const url1 = 'https://api.escuelajs.co/api/v1/products'
    const productService = new BaseHttpService<Product>(url1)
    const rta = await productService.getAll()
    console.log(rta)
    productService.update<Product['id'], UpdateProductDto>(1,{title: 'new title'})

    const urlCategory = 'https://api.escuelajs.co/api/v1/categories'
    const CategoryService = new BaseHttpService<Category>(urlCategory)
    const rta2 = await CategoryService.getAll()
    console.log(rta2)

})();


// const service = new BaseHttpService<string>()
// service.getAll()
// const service2 = new BaseHttpService<number>()
// service2.data
// const serviceCategory = new BaseHttpService<Category>()
// serviceCategory.getAll()

