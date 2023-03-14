//parametros opcionales tienen que ir al final

export const createProduct = (
  id: string | number,
  stock?: number,
  isNew?: boolean
) => {
  return {
    id,
    stock,
    isNew: isNew ?? true //se asigna un valor por defecto en caso de que no llegue su valor
  }
}

const p1 = createProduct(1, 12)
console.log(p1);
