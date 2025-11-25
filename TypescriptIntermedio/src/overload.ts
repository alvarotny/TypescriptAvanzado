
export function parseStr(value:string | string[]): string | string[]{
  if(Array.isArray(value)){
    return value.join("") // Array -> string
  }else{
    return value.split("")// String -> Array
  }
}

// assercion de tipos
const rta1 = parseStr("alvaro") as string[]
rta1.reverse()
const rta2 = parseStr(["V","i","r","u","s"]) as string;
rta2.toLocaleLowerCase()
console.log(rta1)
console.log(rta2)
