import {Etiqueta} from "./../etiqueta/etiqueta.model"
import {Basemodel} from "../base.model"
export type Sizes = "S"|"M"|"L"|"XL";
export enum TAG {tag1="VERANO",tag2="INVIERNO",tag3="PRIMAVERA"}


type Cliente = {id:number,name:string,etiqueta:Etiqueta}
// tipo de anidamiento
// extends => solo funcional para las interfaces
export interface Producto extends Basemodel{
  nombre:string,
  decription:string,
  color:string,
  precio:number,
  medida:Sizes,
  tag: TAG,
  cliente:Cliente,
  list:[]
}
