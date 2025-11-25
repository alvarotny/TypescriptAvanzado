const numberWhile = ():never =>{
  while (true){
    console.log("holaa")
  }
}

const ValueError = (message:string): never =>{
  throw new Error(message)
}

const validateData = (value: unknown) =>{
  if(typeof value == "string"){
    return "values is string"
  }else if(Array.isArray(value)){
    return "Value is array"
  }
  return ValueError("tipo incorrecto")
}

console.log(validateData("hola"))
console.log(validateData([2,32,true]))
console.log(validateData(23)) //fin del never
console.log(validateData("me sigo ejecutando"))

