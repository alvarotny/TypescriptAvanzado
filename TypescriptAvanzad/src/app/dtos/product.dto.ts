import { Product } from "../models/product.model";
import { Category } from "../models/category.model";

// omit >= omite los propiedades especificados
export interface CreateProductDto extends Omit<Product, 'id' | 'category'>{
    // ADD Propertie
    categoryId: Category['id'];
}
// Partial >= Convite toda las propiedades en opcionales
export interface UpdateProductDto extends Partial<CreateProductDto>{}