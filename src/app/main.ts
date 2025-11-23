import {productList, addProduct} from "./products/product.service"
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
  categoryId: faker.string.uuid()

  }
  addProduct(producto)
}

// mostrar productos
const getProduct = ():void =>{
  productList.forEach((item) =>{
    console.log(`ID: ${item.id} Producto: ${item.nombre} precio: ${item.precio} medida: ${item.medida}`)
  })
}
getProduct()

//
// Partial >= toma las propiedades de Producto y los establece como opcionales, util para actualizaciones cortas
// type CreateNewProduct = Omit<Producto,"id" | "createdAT" | "updateAT" | "cliente">
type newProductType = Pick<Producto, "nombre" | "cliente"> //crea un nuevo tipo respecto a un producto establecido
const updateProduct = (id: number, changes: Partial<Producto>) => {
  const index = productList.findIndex(p => p.id === id);

  if (index === -1) {
    console.log("Producto no encontrado");
    return;
  }
  // reemplazar data existente
  Object.assign(productList[index]!, changes)
};


updateProduct(6642163147648024, { precio: 120 });



// getProduct()
// console.log(productList)
