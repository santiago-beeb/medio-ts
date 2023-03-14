import { faker } from '@faker-js/faker'

import { addProduct, getProducts, products, updateProduct } from "./products/product.service";

for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid(),
    size: faker.helpers.arrayElement(['M', 'S', 'L']),
    tags: faker.helpers.arrayElements()
  });
}

console.log(products);
const product = products[0];
updateProduct(product.id, {
  title: 'New Title',
  stock: 80,
  price: 100,
})


getProducts({
  stock: 10,
})


