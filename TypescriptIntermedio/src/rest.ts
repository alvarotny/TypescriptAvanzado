enum CATEGORIA {cat1="Pantalon",cat2="Polo",cat3="Zapato"};
enum ROL {ADMIN="admin",CLEINTE="Cliente",EMPLEADO="Empleado"}
type Products = [string, number, boolean, Date, CATEGORIA];
// crea un objeto con usuario y producto
type Users = {nombre:string,edad:number,producto:Products,rol:ROL};

let UserAndProduct : Users = {nombre:"Alvaro",edad:15,producto:["POlo con caricatura",23,true,new Date(),CATEGORIA.cat2],rol:ROL.CLEINTE}

const checkAdminRol = ():void =>{
  if (UserAndProduct.rol == ROL.ADMIN){
    console.log("EL usuario es un administrador y sus productos son: ", UserAndProduct)
  }else{
    console.log("El usuario es un cliente y su producto es: ", UserAndProduct)
  }
}
checkAdminRol();


const checkRolV2 = (rolesPermitidos:ROL[]):boolean =>{
  if(rolesPermitidos.includes(UserAndProduct.rol)){
    return true;
  }else{
    return false;
  }
}

const rest2 = checkRolV2([ROL.ADMIN,ROL.EMPLEADO])
console.log(rest2)


// USO DE REST PARA VALIDACIONS AMPLIAs
const checkRolV3 = (...roles:ROL[]) =>{
  if (roles.includes(ROL.ADMIN)){
    return true;
  }else{
    return false
  }
}
const rpta3 = checkRolV3(ROL.ADMIN,ROL.CLEINTE,ROL.CLEINTE)
console.log(rpta3)
//

const sum = (...numbers:number[]): number =>{
  let value: number = 0;
  numbers.forEach((item) =>{value += item})
  return value
}
console.log("la suma es: ",sum(23,3,42,42,342,34,2))
