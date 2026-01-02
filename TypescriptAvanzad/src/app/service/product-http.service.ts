import axios from "axios";
import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { ProductService } from "./product-service.model";
import { da } from "@faker-js/faker/.";

export class ProductHttpService implements ProductService{
    // **URL PARA ENVIAR NUESTRO REQUEST**
    private url = 'https://api.escuelajs.co/api/v1/products';

    // **TIPADOS asyncrono HTTP => METODOS**
    async getAll() {
        const { data } = await axios.get<Product[]>(this.url);
        return data;
    }
    async update(id: Product["id"], changes: UpdateProductDto) {
        const { data } = await axios.put(`${this.url}/${id}`, changes);
        return data;
    }
    async create(data: CreateProductDto){
        const response = await axios.post(this.url, data);
        return response.data;
    }

    async findOne(id: Product["id"]) {
        const { data } = await axios.get(`${this.url}/${id}`)
        return data;
    }
    
}