import {Producto} from "./product.model"
import { CreateNewProduct } from "./product.dto"
import {fa, faker, fakerVI}from "@faker-js/faker"
import {DATA} from "../etiqueta/etiqueta.model"
import { PartialProduct, findProduct } from "./product.dto"




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
//LISTAR PRODUCTOS
const getProduct = ():void =>{
  productList.forEach((item) =>{
    console.log(`ID: ${item.id} Producto: ${item.nombre} precio: ${item.precio} medida: ${item.medida}`)
  })
}


//ACTUALIZAR PRODUCTO ESPECIFICOs
// id:Producto["id"] ==> acceder al tipado por su indice
export const updateP = (id:Producto["id"], changes:PartialProduct):Producto | null=>{
  let index = productList.findIndex(item => item.id === id);
  if(index === -1){
    console.log("Producto no encontrado");
    return null;
  }
  Object.assign(productList[index]!, changes)
  return productList[index]!;
}

// Metodo para busqueda de productos segun un id
const findP = (data: findProduct): Producto[] | null => {
  // data.list = []

  const filtered = productList.filter((item) => {
    return Object.entries(data).every(([key, value]) => {
      return item[key as keyof Producto] === value;
    });
  });
  BitcoinAddressFamilyasdf
  as
  fd
  a
  sdf

  return filtered.length > 0 ? filtered : null;
};
