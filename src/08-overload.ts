//sobrecarga de funciones

/* lo que vamos a hacer es escribir de nuevo la función con los parámetros y su tipo de dato de retorno antes de declarar la función como tal, para que de esa forma TS sepa en que casos se retorna cierto valor */
function parseStr(input: string): string[];
function parseStr(input: string[]): string;

//funcion

function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');
  } else if (typeof input === 'string'){
    return input.split('');
  }
}

const rtaArray = parseStr('santi');
console.log('array',rtaArray);

const rtaStr = parseStr(['s','a','n','t','i']);
console.log('string',rtaStr);

