// function sum(a, b){
// 	return a + b;
// }

// export const sub = (a, b) => a - b;

// const mult = (a, b) => a * b;

// const div = (a, b) => a / b;

// export { mult as multiplicacao, div };

// // Exportando a função
// // apenas podemos ter um default por arquivo.
// export default sum;

// class Calculator {
export default class {
	constructor(){}

	sum(a, b){
		return a + b
	}

	sub(a, b){
		return a - b;
	}

	mult(a, b) {
		return a * b
	}

	div(a, b){
		return a / b
	}
}

// export default Calculator;