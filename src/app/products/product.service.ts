import {Producto} from "./product.model"

export let productList : Producto[] = []

export const addProduct = (data:Producto) =>{
  productList.push(data)
}
