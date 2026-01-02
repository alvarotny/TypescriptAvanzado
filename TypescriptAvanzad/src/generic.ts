import { Dog } from './protected'

function getValue(value: unknown){
    return value;
}
// **Tipados conocidos**
// E - Elemento (elementos en una colección)
// K - Llave
// N - Número
// V - Valor
// T - Tipo

// **Inferir el tipado**
function getValues<MyType>(value: MyType){
    const array : MyType[] = [value];
    return value;
}
// **Inferir de manera detallada => tipado**
getValues<boolean>(true)
getValues<string>("Descriptions").toLocaleLowerCase()
getValues<number>(21).toString()
getValues<(number | string) []>([233,"string",22])
const perro = new Dog('fifi',"black");
getValues<Dog>(perro).greeting()

// promise<bolean>
// axios.get<string[]>
