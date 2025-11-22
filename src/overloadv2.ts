// Sobre carga de funciones v2

function parseStrv2 (value:string): string[];
function parseStrv2 (value: string[]): string;
function parseStrv2 (value: number): boolean;

// si tenemos una sobrecarga de funciones para ANY O UNKNOWN => siempre hay q dejarlo al final

function parseStrv2(value:unknown):unknown{
  if(Array.isArray(value)){
    return value.join("") //->string
  }else if(typeof value === "string"){
    return value.split("");
  }else if(typeof value === "number"){
    return true;
  }
}

const rta1 = parseStrv2(["hola"])
const rta2 = parseStrv2("alvaro")
const rta3 = parseStrv2(23)
console.log(rta1)
console.log(rta2)
console.log(rta3)


