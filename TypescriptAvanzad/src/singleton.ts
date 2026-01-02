export class MyService{
    // SINGLETON
    static instance: MyService | null = null;
    // SINGLETON
    private constructor(private name?: string, private num?: number){}


    // METODO ESTATICO PARA UNA INSTANCIA
    static create(name: string, num: number): MyService {
        if (MyService.instance === null) {
            MyService.instance = new MyService(name, num);
        }
        return MyService.instance;
    }
    
    getname(){
        return this.name;
    }

    getnum(){
        return this.num;
    }
}



const service1 = MyService.create("jose", 123);
console.log(service1.getname())
const service2 = MyService.create("jose234232", 123324234);
console.log(service2.getname())


console.log(service1 === service2);

