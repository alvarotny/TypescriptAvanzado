class SaludoAlCliente{
    // Constructor con asignacion y valor
    constructor(
        public msj: string = "Sin msj",
        private _bol: boolean = false, //_bol => Representativo de una convencion
        protected num: number = 0,
        private year: number = 2000
    ){}

    get bol(){
        return this._bol;
    }

    // Getter: se accede como una propiedad, no como método
    get isLeapYear(): boolean{
        if(this.year % 400 === 0) return true;
        if(this.year % 100 === 0) return false;
        return this.year % 4 === 0;
    }
}

const s = new SaludoAlCliente();
console.log(s.bol)
console.log(s.isLeapYear)