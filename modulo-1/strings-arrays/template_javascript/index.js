// ----------------Exercícios de interpretação de código-----------------
/*
EXERCPICIO 1

let array
console.log('a. ', array) RESPOSTA "a. undefined"

array = null
console.log('b. ', array) RESPOSTA "b. null"

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) RESPOSTA "c. 11"

let i = 0
console.log('d. ', array[i]) RESPOSTA "d. 3"

array[i+1] = 19
console.log('e. ', array) RESPOSTA "e. array (11)"

const valor = array[i+6]
console.log('f. ', valor) RESPOSTA "f. 9"
*/

/* exercício 2

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

"Qual será o valor impresso no console se a entrada do usuário 
for: "Subi num ônibus em Marrocos"?"

RESPOSTA "SUBI NUM ÔNIBUS EM MIRROCOS 27"
*/

// -----------------Exercícios de escrita de código---------------------

//exercício 1

const nomeDoUsuario = prompt("qual o seu nome?");
const emailDoUsuario = prompt("qual o seu email?");

console.log(`o e-mail ${emailDoUsuario} foi cadastrado com sucesso. 
seja bem vinda(o), ${nomeDoUsuario}!`);

// exercício 2

const comidasPreferidas = ["banana", "maçã", "feijão", "arroz", "batata"];

console.log("Essas são as minhas comidas preferidas: ");
console.log(comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
console.log(comidasPreferidas[4]);

const qualASuaComidaPreferida = prompt("qual a sua comida preferida?");

comidasPreferidas.splice(1, 1, qualASuaComidaPreferida);

console.log(
  `Minha comida preferida para substituir o 2° item é ${qualASuaComidaPreferida}`,
  comidasPreferidas
);

// exercício 3

const tarefasDoDia1 = prompt("qual tarefa você executa no dia?");
const tarefasDoDia2 = prompt("qual outra tarefa você executa no dia?");
const tarefasDoDia3 = prompt("mais uma tarefa que você executa no dia?");
const listaDeTarefas = [tarefasDoDia1, tarefasDoDia2, tarefasDoDia3];

console.log("Minha lista de tarefas é: ", listaDeTarefas);

const qualTarefaDesejaExcluir = Number(
  prompt("qual tarefa deseja excluir: 1, 2 ou 3?")
);
listaDeTarefas.splice(qualTarefaDesejaExcluir - 1, 1);
console.log("Lista de tarefas com exclusão: ", listaDeTarefas, ".");

// desafio
// exercício 1

const frase = "meu nome é lucas e sou dev!";
const fraseArray = frase.split(" ");
console.log("Essa é minha frase em array: ", fraseArray, ".");

// exercício 2

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
console.log("Lista de compra da feira: ", frutas, ".");
console.log(`O índice do item abacaxi é, ${frutas.indexOf("Abacaxi") + 1}°.`);
console.log(`Lista de frutas tem, ${frutas.length} itens.`);
