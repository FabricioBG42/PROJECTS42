// function somar(a, b) {
// 	return a + b;
// }

function dividir(a, b) {
	return a / b;
}

const somar = (a, b) => a + b;
const quadrado = a => a * a;

console.log(somar(4, 5), 'soma');
console.log(quadrado(4), 'area');


const instrumento = 'Violão';

(() => {
	const instrumento = 'Guitarra';
	console.log(instrumento);
})();

console.log(instrumento);


