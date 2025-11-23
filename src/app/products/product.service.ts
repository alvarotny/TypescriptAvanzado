import {Producto} from "./product.model"
import { CreateNewProduct } from "./product.dto"
import {fa, faker, fakerVI}from "@faker-js/faker"
import {DATA} from "../etiqueta/etiqueta.model"
export let productList : Producto[] = []

// agrregar el producto y lo almacena en una lista
// "id" | "createdAT" | "updateAT" | "cliente"
export const addProduct = (data:CreateNewProduct): Producto =>{
  let newProduct: Producto = {
    ...data,
    id: faker.string.uuid(),
    createdAT: faker.date.recent(),
    updateAT: faker.date.recent(),
    cliente: {
      id: faker.number.int(),
      name: faker.commerce.productName(),
      etiqueta: {
        id: faker.number.int(),
        valor: DATA.desarrollo
      }
    }
  };
  productList.push(newProduct)
  return newProduct
}

const updateP = (id:number, changes: Partial<Producto>) =>{
  let index = productList.findIndex((item)=> item.id === id);
  if(index === -1){
    console.log("Producto no encontrado")
    return;
  }
  Object.assign(productList[index]!, changes)
}
