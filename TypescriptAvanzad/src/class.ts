// instancia => Date
const data = new Date();
const date = new Date(2007,1,15); //0 enero -> 11 diciembre
data.getDate(); // dia do mês
data.getDay(); // dia da semana (0 - 6)
console.log(data)
console.log(date)


class MyDate{
  // PROPIEDADES
   public year: number;
   public month: number;
   public day: number;
   protected email: string;
   private contraseña: string;

  //  Intancia -> Clase -> Constructor -> Propiedades
   constructor(year: number, month: number, day: number, email: string, contraseña:string){
     this.year = year;
     this.month = month;
     this.day = day;
     this.email = email;
     this.contraseña = contraseña;
   }

  //  METODOS
  printForma(): string{
    return `FECHA: ${this.day}/${this.month}/${this.year}`;
  }
  add(amount: number, type: 'days' | 'month' | 'years'){
    if(type === 'days'){
      this.day += amount;
    }else if(type === 'month'){
      this.month += amount;
    }else if(type === 'years'){
      this.year += amount;
    }else{
      console.log('no se puede hacer la suma')
    }
    console.log(this.contraseña)
  }
}

const mydate = new MyDate(2023, 1, 15, 'jose@gmail.com', '123456789');
console.log(mydate.printForma())
mydate.add(3, 'days')
console.log(mydate.printForma())
