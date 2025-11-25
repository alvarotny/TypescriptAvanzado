//
// readonly >= establece un tipo en solo lectura, cosa q previene las modificaciones futuras
export interface Basemodel{
  readonly id:string  | number,
  createdAT:Date,
  updateAT:Date}
