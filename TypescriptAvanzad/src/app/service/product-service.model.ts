import { UpdateProductDto } from "../dtos/product.dto";
import { CreateProductDto} from "../dtos/product.dto";
import { Product } from "../models/product.model";

// DEFINIENDO METODOS DENTRO DE UNA INTERFAZ
export interface ProductService{
    // **ATRIBUTOS**

    // **METODOS**
    getAll(): Product[] | Promise<Product[]>;
    // changes => cambios que se van a realizar en el producto
    update(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product>;
    create(data: CreateProductDto): Product | Promise<Product>;
    findOne(id: Product['id']): Product | undefined | Promise<Product | undefined>;

}