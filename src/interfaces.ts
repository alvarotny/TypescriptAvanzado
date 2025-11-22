type Sizes = "S"|"M"|"L"|"XL";
type Product = string | object;
// interface Sizes2 {string|number} => no puede contener tipos como un conjunto
// la ventaja de usar interface es q es usado para realizar estructuras lo cual es mas eficiente q hacerlo con type example:
interface Product2{
  id:number,
  nombre: string,
  date: Date,
  medida: Sizes
}

// list products
const productList : Product2[] = []
let producto : Product2 = {id:1,nombre:"ropa",date:new Date(), medida:"L"}

const addproduct = (data:Product2):void =>{
  productList.push(data)
}

addproduct(producto)
console.log(productList)


