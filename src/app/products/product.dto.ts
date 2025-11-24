
// inteface q obvia algunos atributos de producto
import { Producto } from "./product.model";

// type utills Omit =>
export interface CreateNewProduct extends Omit<Producto, "id" | "createdAT" | "updateAT" | "cliente">{
  categoryId: string;
}

// type utills => Pick
export interface CreateType extends Pick<Producto, "id" | "nombre" | "precio">{};


// type utills Partial
export interface PartialProduct extends Partial<CreateNewProduct>{};


// type utills required
// type requiredProduct = Required<Producto>
export interface RequiredProduct  extends Required<Producto>{};


// type utills partial find
export interface findProduct extends Readonly<Partial<Omit<Producto, "list">>>{
  readonly list: ReadonlyArray<string>;
}
