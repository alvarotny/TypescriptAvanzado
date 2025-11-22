let tupla2: [string | number, Date, boolean, number][] = [];

const createProduct = (nombre: string | number = 20, date: Date, valueBolean: boolean, stock: number) => {
  const nuevaTupla: [string | number, Date, boolean, number] = [nombre, date, valueBolean, stock];
  tupla2.push(nuevaTupla);
  return nuevaTupla;
}

const product1 = createProduct("alvaro", new Date(), false, 23);
const product2 = createProduct(undefined,new Date(), false, 23);
console.log(tupla2)
