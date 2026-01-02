// Acceso publico

class Persona{

  public nombre: string;
  public edad: number;
  readonly fecha : Date;

  constructor(nombre: string, edad: number, fecha: Date) {
    this.nombre = nombre;
    this.edad = edad;
    this.fecha = fecha;
  }

  public saludar(): string{
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años. Fecha: ${this.fecha}`;
  }
}

const persona1 = new Persona("Juan", 30, new Date());
console.log(persona1.saludar());
