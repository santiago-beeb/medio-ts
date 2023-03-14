//tipo never, ciclo infinito
const withouEnd = () => {
  while (true) {
    console.log('never');
  }
}

//
//tipo never, no llega a ejecutarse
const error = (message: string) => {
  throw new Error(message);
}

const ejem = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string'
  } else if (Array.isArray(input)) {
    return 'es in array'
  }
  return error('fallo la app')
}

console.log(ejem('hola'));
console.log(ejem([5,6,6]));
console.log(ejem(53121));
console.log(ejem('53121')); //no llega hasta aqui


