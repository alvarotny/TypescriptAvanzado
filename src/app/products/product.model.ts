import {Etiqueta} from "./../etiqueta/etiqueta.model"
import {Basemodel} from "../base.model"
type Sizes = "S"|"M"|"L"|"XL";


type Cliente = {id:number,name:string,etiqueta:Etiqueta}
// tipo de anidamiento
// extends => solo funcional para las interfaces
export interface Producto extends Basemodel{nombre:string,medida:Sizes,cliente:Cliente}
