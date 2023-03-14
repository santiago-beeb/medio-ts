//literal types
type Sizes = 'S' | 'M' | 'L';
/* type Product = {
  id: string | number;
  title: string;
  createdAt: string;
  stock: number;
  size?: Sizes
} */

//interfaces

//Las interfaces funcionan muy similar a como lo hace type, pero en las interfaces solo aplica para los objetos
interface Product {
  id: string | number;
  title: string;
  createdAt: string;
  stock: number;
  size?: Sizes
}

/* ¿Entonces, porque usar interfaces si puedo usar type?
La razón es sencilla, con las interfaces podemos heredar otras interfaces, y con los type no podemos hacer eso. */

const products: Product[] = [];

products.push({
  id: '1',
  title: 'iPhone 6',
  createdAt: '2017-01-01',
  stock: 10,
})
