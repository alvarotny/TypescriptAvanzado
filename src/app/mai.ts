import {productList, addProduct} from "./products/product.service"
import {Producto} from "./products/product.model"
import {DATA} from "./etiqueta/etiqueta.model"

let producto : Producto  = {id:1,createdAT:new Date,updateAT:new Date,nombre:"pantalon",medida:"S",cliente:{id:2,name:"alvaro",etiqueta:{id:3,valor:DATA.desarrollo}}}
addProduct(producto)
console.log(productList)
