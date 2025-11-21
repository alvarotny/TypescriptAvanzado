const values : (string | number)[] = [];
values.push("value1",1,"value2",23)

// definicion de los conjuntos q actuan como valores unicos
let tuple : [string, number, boolean];
tuple = ["value",23,true]
// tuple = ["value2",23,true, "s"]

// destructuracion de tupla
const [username,age] = tuple;
console.log(username)
console.log(age)



enum password {opcion1="admin123",opcion2="awp#",opcion3="#?alvy"}
type email = string;
type nombre = string;
let user : [nombre, email, password]
user = ["alvaro", "alvaro@gmail.com", password.opcion1]

const [name,,contraseñ] = user;
console.log(name)
console.log(contraseñ)



