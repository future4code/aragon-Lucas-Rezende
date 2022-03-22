// ----------------exercícios de interpretação-----------------------

/* exercício 1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) ---RESPOSTA "a. false"

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) ---RESPOSTA "b. false"

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) ---RESPOSTA "C. true"

console.log("d. ", typeof resultado) ---RESPOSTA "boolean"
*/

/* exercício 2

let primeiroNumero = prompt("Digite um numero!");
let segundoNumero = prompt("Digite outro numero!");

const soma = primeiroNumero + segundoNumero;

console.log(soma);

Resposta "o prompt retorna uma string o que fará a const soma 
concatenar os dois valores se der 10 e 20 retorna no console 1020"

*/

/* exercício 3

RESPOSTA "para converter a type da resposta 
do prompt para number deve colocar 
Number antes do prompt dessa forma 
Number(prompt(""Digite um numero!")) 
assim em vez de concatenarm, a const soma 
irá somar os valores. Deve acrescentar
Number nos dois prompt, assim a resposta não 
será 1020 será 10+20=30.

*/

// ----------------exercícios de escrita -----------------------

// exercício 1

//  let suaIdade = prompt("qual a sua idade?");
//  let idadeMelhorAmigo = prompt("qual a idade do seu melhor amigo?");
//  let diferencaIdade = suaIdade > idadeMelhorAmigo;

//  console.log("sua idade é maior que a do seu melhor amigo?", diferencaIdade);

// exercício 2

let numeroPar = prompt("insira um número par!");

console.log(numeroPar % 2);

// " o resto da divisão com numero par sempre será 0 e com impar será 1"

// exercício 3

let idadeEmAnos = prompt("qual a sua idade em anos?");
const idadeEmhoras = idadeEmAnos * 365 * 24;

console.log("A idade em meses é,", idadeEmAnos * 12, "meses");
console.log("A idade em dias é,", idadeEmAnos * 365, "dias");
console.log("A idade em horas é,", idadeEmhoras, "horas");

// exercício 4

let minhaIdade = Number(prompt("qual a sua idade?"));
let idadeCompanheiroa = Number(
  prompt("qual a idade do seu ou sua companheira?")
);
const divisivelMinhaIdade = minhaIdade % idadeCompanheiroa;
const divisivelIdadeComp = idadeCompanheiroa % minhaIdade;

console.log("minha idade é", minhaIdade);
console.log("meu companheiro ou companheira tem", idadeCompanheiroa, "anos");

console.log(
  "O primeiro número é maior que segundo?",
  minhaIdade > idadeCompanheiroa
);
console.log(
  "O primeiro número é igual ao segundo?",
  minhaIdade === idadeCompanheiroa
);
console.log(
  "O primeiro número é divisível pelo segundo?",
  divisivelMinhaIdade === 0
);
console.log(
  "O segundo número é divisível pelo primeiro?",
  divisivelIdadeComp === 0
);

// ------------- DESAFIO -------------------

// exercpício 1

let temperaturaFahre = 77;
let temperaturaCelsius1 = 80;
let temperaturaCelsius2 = 30;
let temperaturaCelcius = prompt("digite a temperatura em graus Celsius!");

let transformaEmKelvin1 = (temperaturaFahre - 32) * (5 / 9) + 273.15;
let transformaEmFahre = temperaturaCelsius1 * (9 / 5) + 32;
let transformaEmFahre2 = temperaturaCelsius2 * (9 / 5) + 32;
let transformaEmKelvin2 = (transformaEmFahre2 - 32) * (5 / 9) + 273.15;
let transformaEmFahre3 = temperaturaCelcius * (9 / 5) + 32;
let transformaEmKelvin3 = (transformaEmFahre3 - 32) * (5 / 9) + 273.15;

console.log(transformaEmKelvin1, "K");
console.log(transformaEmFahre, "°F");
console.log(transformaEmFahre2, "°F", transformaEmKelvin2, "K");
console.log(transformaEmFahre3, "°F", transformaEmKelvin3, "K");

// exercício 2

let energiaEmQH1 = 280;

let consumoComDesconto = energiaEmQH1 * 0.05 * 0.85;

console.log("valor a ser pago em 280 Q/H é,", energiaEmQH1 * 0.05, "reais");
console.log(
  "valor a ser pago com 15% de desconto é de ",
  consumoComDesconto,
  "reais"
);

// exercício 3

let libras = 20;
let onca = 10.5;
let milhas = 100;
let pes = 50;
let pes2 = prompt("coloque um valor em pes para converter em metros|");
let galao = 103.5;
let xic = 450;

console.log("20lb equivalem a", libras / 2.205, "kg");
console.log("10.5oz equivalem a", onca / 33.594, "kg");
console.log("100mi equivalem a", milhas * 1609, "m");
console.log("50ft equivalem a", pes / 3, 281, "m");
console.log("103.56gal equivalem a", galao * 3, 785, "l");
console.log("450 xic equivalem a", xic / 6, "l");
console.log("a medida de ", pes2, "pés em metros é,", pes2 / 3, "m");
