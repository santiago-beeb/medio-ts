// declarar valores por defecto
export const createProduct = (
  id: string | number,
  stock: number = 10, //se asigna un valor por defecto en caso de que no llegue su valor
  isNew: boolean = true //se asigna un valor por defecto en caso de que no llegue su valor
) => {
  return {
    id,
    stock,
    isNew
  }
}

const p1 = createProduct(1, 12)
console.log(p1);
