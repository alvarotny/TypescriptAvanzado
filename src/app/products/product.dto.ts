
// inteface q obvia algunos atributos de producto
import { Producto } from "./product.model";

export interface CreateNewProduct extends Omit<Producto, "id" | "createdAT" | "updateAT" | "cliente">{
  categoryId: string;
}
