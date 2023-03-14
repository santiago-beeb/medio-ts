import { Product } from './product.model';
import { CreateProductDto, getProductDto, UpdateProductDto } from './product.dto';
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (id: string, changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index]
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index]
}

export const getProduct = (id: string) => {

}

export const getProducts = (dto: getProductDto): Product[] => {
  return products;
}

export const deleteProduct = (id: string) => {

}
