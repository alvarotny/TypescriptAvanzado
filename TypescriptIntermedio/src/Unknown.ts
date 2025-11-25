let user: any;
user = "asfd"
user = 23
user = true
user = undefined

// Uso de unknown q requiere validacions
let userUnknown : unknown;
userUnknown = true
userUnknown = "alvaro"
userUnknown = null
userUnknown = {}

// valicacion
if(typeof userUnknown == "string"){
  userUnknown.toLowerCase()
}else{
  console.log("tipo incorrecto")
}
//
const dict = (data:string):unknown =>{
  try{
    return JSON.parse(data)
  }catch (error){
    return "la data no es json"
  }
}
// asignacion de tipo
if(typeof userUnknown == "boolean"){
  let unknownV2 : boolean = userUnknown;
}
