// ------------exercícios de interpretação ---------------

// exercício 1

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

//RESPOSTA:
// a)
// 10
// 50

// b) não apareceria nada

// exercício 2

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function (texto) {
//   return texto.toLowerCase().includes("cenoura");
// };

// const resposta = outraFuncao(textoDoUsuario);

// console.log(resposta);

//RESPOSTA:
// a) essa função serve para tornar o texto minusculo e validar se tem ou não uma palavra no caso cenoura.

// b)
// i.   Eu gosto de cenoura "eu gosto de cenoura true"
// ii.  CENOURA é bom pra vista "cenoura é bom pra vista true"
// iii. Cenouras crescem na terra "cenouras cresem na terra true"

// --------------------- exercícios de escrita ------------------------

// exercício 1

//a)

function sobreMim() {
  return `Eu sou lucas, tenho 32 anos, moro em uberlândia e sou programador.`;
}

console.log(sobreMim());

//b)

const nome = prompt("qual o seu nome?");
const idade = prompt("qual a sua idade?");
const cidade = prompt("qual a sua cidade");
const profissao = prompt("qual a sua profissão?");

function mensagemSobreMim(texto) {
  return `Olá eu sou o ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;
}

console.log(mensagemSobreMim());

// exercício 2

// a)
let num3 = Number(prompt("insira um número!"));
let num4 = Number(prompt("insira um número!"));

function soma(num3, num4) {
  return num3 + num4;
}

console.log(`${num3} + ${num4} = ${soma(num3, num4)}`);

//b)
const numb1 = Number(prompt("o número ..."));
const numb2 = Number(prompt("é maior que..."));

function compararMenorOuMaior(numb1, numb2) {
  return numb1 >= numb2;
}

console.log(
  `${numb1} é maior ou igual a ${numb2}: ${compararMenorOuMaior(numb1, numb2)}`
);

//c)
const c = prompt("esse número é par?");

function esseNumeroPar(c) {
  const par = c % 2;
  return par === 0;
}

console.log(`${c} é par? ${esseNumeroPar(c)}`);

//d)
const frase = prompt("digite uma frase!");

function caixaAlta(texto) {
  return frase.toUpperCase();
}
function tamanho(texto) {
  return frase.length;
}

console.log(
  `A frase ${frase} tem, ${tamanho(
    frase
  )} caracteres, e fica assim em caixa alta: ${caixaAlta(frase)}.`
);

// exercício 3

let num1 = Number(prompt("insira um número!"));
let num2 = Number(prompt("insira um número!"));

function soma(num1, num2) {
  return num1 + num2;
}
function diferenca(num1, num2) {
  return num1 - num2;
}
function multiplicacao(num1, num2) {
  return num1 * num2;
}
function divisao(num1, num2) {
  return num1 / num2;
}

console.log(`Números inseridos: ${num1} e ${num2}`);
console.log(`soma: ${soma(num1, num2)}`);
console.log(`diferença: ${diferenca(num1, num2)}`);
console.log(`multiplicação: ${multiplicacao(num1, num2)}`);
console.log(`divisão: ${divisao(num1, num2)}`);

//DESAFIO

//exercício 1

//a)
const valor = (x) => {
  return x;
};

//b)
const recebeValor2 = (val1, val2) => {
  return recebeValor + val1 + val2;
};

const recebeValor = valor(10);

console.log(`${valor(10)}, ${recebeValor2(4, 5)}.`);

//exercício 2

const cateto1 = Math.pow(2, 2);
const cateto2 = Math.pow(4, 2);

function pitagoras(cateto1, cateto2) {
  return Math.pow(cateto1 + cateto2, 0.5);
}

console.log(`o valor da hipotenusa é = ${pitagoras(cateto1, cateto2)}`);
