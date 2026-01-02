class Animal{
    constructor (public name: string = 'fifi'){}

    // **METODOS**
    public move(){
       console.log('Moving along!') 
    }

    public greeting(){
        return `Hello, I'm ${this.name}`
    }
}

class Dog extends Animal{
    // Contructor con definicio y valor
    constructor(private _owner: string, name: string){super(name)}

    // **Metodo**
    public woof(n: number = 1){
        return "woof ".repeat(n)
    }

    // **Getters**
    get owner(){
        return this._owner;
    }
    // **Setters**
    set owner(newOwner: string){
        this._owner = newOwner;
    }
}

class Cat extends Animal{
    // **Metodo**
    public meow(n: number = 1){
        for(let i = 0; i < n; i++){
            console.log('meow')
        }
    }
}

const Ani = new Animal();
console.log(Ani.greeting())
Ani.move()
// *******Herencia******
const cheis = new Dog('Tedy', 'cheis');
console.log(cheis.greeting())
console.log(cheis.woof(3))
cheis.move()
cheis.owner = 'jose';
console.log(cheis.owner)
// *******Herencia2******
const gato = new Cat('julian');
gato.meow(3)
gato.move()