
let tuple : [string | number,number,Date,boolean][] = [];

// nullish-coalescing => ?? ==> solo reempla el valo cuando sea null o undefine
const createProduct = (id:number | string, stock:number,date: Date, state:boolean | null | undefined) =>{
  tuple.push([id, stock || 100, date ?? new Date(), state ?? true]);
}

const p1 = createProduct("1",23,new Date(), undefined)
const p2 = createProduct("2",3,new Date(), null)
const p3 = createProduct(3,239,new Date(), false)
console.log(tuple)


