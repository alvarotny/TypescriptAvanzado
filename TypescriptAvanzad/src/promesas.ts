// **FUNCION ASINCRONA**
import axios from "axios";
// **Definimos una interfaz**
interface Product{
    id:number;
    title: string;
    price: number;
    description: string;
}

(async () => {
    // **PROMISE FUCTION**
    function delay(time: number) {
        
        const promise = new Promise<boolean>((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, time);
        });
        
        return promise;
    }

    // **FUNCION ASIGNOCRANA**
    async function getProductsAsync(){
        try{
            // Respuesta generica
            const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
            return data;
        }catch(error){
            console.error('Hubo un error al obtener los productos', error)
            return [];
        }
    }
    
    console.log('-----Inicializando Proceso-----')
    const startTime = Date.now();
    // **Lazamiento de la promesas**
    const productsPromise = getProductsAsync();
    const delayPromise = delay(3000);

    // **Obtencion de tiempo**
    const [products, delayResul] = await Promise.all([productsPromise, delayPromise]);
    const totalTime = (Date.now() - startTime) / 1000;

    // **RESULT**
    console.log(`Productos obtenidos: ${products.length}`);
    console.log(`Delay terminado: ${delayResul}`);
    console.log(`Tiempo total de ejecución: ${totalTime} segundos`);

})();
