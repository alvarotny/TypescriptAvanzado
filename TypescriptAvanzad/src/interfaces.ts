export interface Driver{
    // seran usados como propiedades dentro de una clase q la implementa
    // **ATRIBUTOS**
    database: string;
    password: string;
    port: number;

    // **Metodos**
    connect(): void;
    disconnect(): void;
    isConnectd(name: string): boolean;
}

class PosgreDriver implements Driver{
    // **Constructor**
    constructor(
        public database: string, 
        public password: string, 
        public port: number,
        private email: string
    ){}

    // **Heredacion de metodos**
    connect(): void {
        throw new Error("Method not implemented.");
    }
    disconnect(): void {
        throw new Error("Method not implemented.");
    }

    isConnectd(name: string): boolean {
        return true;
    }
}


class OracleDriver implements Driver{
    constructor(
        public database: string, 
        public password: string, 
        public port: number,
        protected host: string
    ){}

    // **Heredacion de metodos**
    connect(): void {
        throw new Error("Method not implemented.");
    }
    disconnect(): void {
        throw new Error("Method not implemented.");
    }

    isConnectd(name: string): boolean {
        return true;
    }
}