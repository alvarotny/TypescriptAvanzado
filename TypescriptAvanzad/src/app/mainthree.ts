import { it } from "@faker-js/faker/.";
import { ProductHttpService } from "./service/product-http.service"

(async () =>{
    try{
        const productService = new ProductHttpService();
        console.log("--".repeat(20))
        const products = await productService.getAll();
        console.log(products.length)
        console.log("--".repeat(20))
        console.log(products.map(item => item.title))

        const targeIndex = 5;
        const productID = products[targeIndex]?.id;
        if(productID === undefined){
            throw new Error('Producto no encontrado')
        }
        await productService.update(productID,{title: 'new title',description: 'new description'});

        const product = await productService.findOne(productID);
        console.log(product)
    }catch(error){
        console.error("Errror=>>>>>>>>>", error)
    }
    

})();