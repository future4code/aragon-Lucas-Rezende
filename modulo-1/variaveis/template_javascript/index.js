/* pergunta 1 
let a = 10
let b = 10

console.log(b) "IMPRIME 10"

b = 5
console.log(a, b) "IMPRIME 10,5"
*/

/* pergunta 2

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) "IMPRIME 10,10,10"
*/

/* pergunta 3

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

SUGESTÃO 
"let p mudar para horasTrabalhadasDia"
"let t mudar para salarioDia"
*/

let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);

// foi impresso no console undefined por que não foi atribuido valores

nome = prompt("qual o seu nome");
idade = prompt("qual a sua idade");

console.log(typeof nome);
console.log(typeof idade);
console.log("Olá", nome, "você tem", idade, "anos");

let voceTomouCafe;
let voceLanchou;
let voceAlmocou;

voceTomouCafe = prompt("você tomou café?");
voceLanchou = prompt("você lanchou?");
voceAlmocou = prompt("você almoçou?");

let a = 10;
let b = 25;
let c;

c = a;
a = b;
b = c;

console.log(a);
console.log(b);
