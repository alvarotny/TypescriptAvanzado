import { Product } from "./models/product.model";
// **FUNCION ASINCRONA**
import axios from "axios";

let unknowVar : unknown = 23;
let bolVar : boolean = unknowVar as boolean;

(async () => {
    // **FUNCION ASIGNOCRANA**
    async function getProducts(): Promise<Product[]>{
        try{
            // Tipando respuesta http
            const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
            const values = data as Product[];
            values.map(item => console.log(item.title))
            return data;
        }catch(error){
            console.error('Hubo un error al obtener los productos', error)
            return [];
        }
    }
    
    // **RESULT**
    const products = await getProducts();
    console.log(products.map(item => `${item.id} - ${item.title}`));
})();
