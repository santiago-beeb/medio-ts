let anyVar: any;

anyVar = true;
anyVar = null;
anyVar = 2;
anyVar = {'saed':51312};

let isNow: boolean = anyVar;

//unknow
let unknow: unknown;

unknow = true;
unknow = null;
unknow = 2;
unknow = {'saed':51312};

if (typeof unknow === 'string') {
  unknow.toUpperCase();
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}



