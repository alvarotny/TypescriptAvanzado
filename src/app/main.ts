import {productList, addProduct, updateP} from "./products/product.service"
import {Producto, Sizes, TAG} from "./products/product.model"
import {fa, faker}from "@faker-js/faker"
import { CreateNewProduct } from "./products/product.dto"

for(let index = 0; index < 5; index++){
  let producto : CreateNewProduct  = {
  nombre:faker.commerce.productName(),
  decription: faker.commerce.productDescription(),
  color:faker.color.human(),
  precio: Number(faker.commerce.price({min:10, max:200})),
  medida:faker.helpers.arrayElement<Sizes>(["L","M","S","XL"]),
  tag:TAG.tag1,
  categoryId: faker.string.uuid(),
  list:[]
  }
  addProduct(producto)
}

//
  // nombre:string,
  // decription:string,
  // color:string,
  // precio:number,
  // medida:Sizes,
  // tag: TAG,
  // cliente:Client

// const productOne = productList[0];
// const rpta  = updateP(productOne?.id,{nombre:"Muebles",description:"Ventas des muebles al por mayor", precio: 234})
// console.log(rpta)
// const rpta2 = findProduct({id:productOne?.id,price:1212});
// console.log(rpta2)
