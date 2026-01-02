import { MemoriProductService } from './service/product-memori.service'

const productService = new MemoriProductService();
productService.create({
    title: 'Product 1',
    price: 100,
    description: 'Description 1',
    categoryId: 1,
    images: ['image1.jpg', 'image2.jpg']
});

const products = productService.getAll();
const productId = products[0]?.id as number;

productService.update(productId, {
    title: 'Product con otro nombre',
});
const rta = productService.findOne(productId);
console.log(productId);
console.log(rta);