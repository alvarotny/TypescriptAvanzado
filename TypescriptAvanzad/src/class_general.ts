// Generate Class
export class MyDate{
    // Propiedades
    public year: number;
    public month: number;
    private day: number;

    // Contructor con parametros
    constructor(year:number, month: number, day: number){
        this.year = year;
        this.month = month;
        this.day = day;
    }

    // Metodos
    public printFormat(): string{
        const day = this.addPadding(this.day);
        const month = this.addPadding(this.month);
        return `${day}/${month}/${this.year}`
    }

    private addPadding(value: number){
        if(value < 10){
            return `0${value}`
        }
        return value;
    }

    public add(ammount: number, type: 'days' | 'months' | 'years'){
        if(type === 'days'){
            this.day += ammount;
        }else if(type === 'months'){
            this.month += ammount;  
        }else if(type === 'years'){
            this.year += ammount;
        }
    }

    public getDay(){
        return this.day;
    }

}

const mydate = new MyDate(2023, 1, 15);
mydate.add(2, 'days')
console.log(mydate.printFormat())
console.log(mydate.getDay())


// ####################################
// Modificador	Mismaclase	Subclase	Fuera
// public	      ✅	        ✅	     ✅ 
// private	      ✅	        ❌	     ❌
// protected	  ✅	        ✅	     ❌
// #######################################

class Cuenta {
    // Definir y asignar un valor dentro de un constructor => importante: Es crucial colocar el acceso
    constructor(private saldo: number = 0, private value: boolean = false){}

    // Metodos
    MostrarSaldo(): string{
        return `DATA:${this.saldo} ${this.value}`;
    }

}

const c = new Cuenta(23,true);
console.log(c.MostrarSaldo())

// @Injectable()
// export class OrderService{

//     // Metodos
//     public createOrder(data: Order) {
//         const total = this.calculateTotal(data);
//         return total;
//     }

//     private calculateTotal(order: Order): number {
//         return order.items.reduce((total, item) => {
//             return total + item.price;
//         }, 0);
//     }

// }



