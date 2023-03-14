import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}
//en vez de usar Omit, se puede usar Pick
type example = Pick<Product, 'color' | 'description'>;


//Partial pone todo opcional
export interface UpdateProductDto extends Partial<CreateProductDto> { }

//Required pone todo obligatorio
type example2 = Required<Product>;


export interface getProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  tags: ReadonlyArray<string>;
}

type example3 = Readonly<Product>;


