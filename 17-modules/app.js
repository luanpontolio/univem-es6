// import método from 'biblioteca'
// * carrega tudo da lib
// as => alias para utiliza o metodo(novo nome)


// import * as R from 'ramda';
// import { union , map } from 'ramda';
import { union as juntoTudo, map as itMap } from 'ramda';

// import sum, { sub as subtracao, multiplicacao, div } from './utils.js';
import Calculator from './utils.js';


const arrOne = [1,2,3,4,5,6];
const arrTwo = [1,1,1,2,2,5];

const lambda = x => x * 2;

const arrUnion = juntoTudo(arrOne, arrTwo);
const arrMap = itMap(lambda, arrOne);

// console.log('Somando', sum(2, 4));
// console.log('Subtraindo', subtracao(2, 2));
// console.log('Multiplicando', multiplicacao(2, 2));
// console.log('Dividindo', div(10, 2));


const calc = new Calculator();
console.log('Somando', calc.sum(2, 4));
console.log('Subtraindo', calc.sub(2, 2));
console.log('Multiplicando', calc.mult(2, 2));
console.log('Dividindo', calc.div(10, 2));

console.log(arrUnion);
console.log(arrMap);