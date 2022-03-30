// --------------------exercicios de interpretação--------------

// exercicio 1

// let valor = 0;
// for (let i = 0; i < 5; i++) {
//   valor += i;
// }
// console.log(valor);

//" RESPOSTA: enquanto i for manor que 5  incrementa um na variável valor até 4 e soma com i "

// exercicio 2

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
// for (let numero of lista) {
//   if (numero > 18) {
//     console.log(numero);
//   }
// }

// a) O que vai ser impresso no console?
// "imprime todos os números maiores que 18"

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista,
// o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// "o for of seria suficiente ficaria assim:
//  for (numero of numeros) { numero > 18} {console.log}}"

// exercicio 3

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "));
// let quantidadeAtual = 0;
// while (quantidadeAtual < quantidadeTotal) {
//   let linha = "";
//   for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
//     linha += "*";
//   }
//   console.log(linha);
//   quantidadeAtual++;
// }

/*
"o código pede a quantidade total de linhas pelo prompt e compara com a quantidade atual.
Enquanto essa comparacção for menor que a quantidade pedida no prompt cria se a variável linha
vazia. para variável aterisco igual a zero enquanto asterisco for menor que quantidade total mais
1 encrementa um "*" na variável linha e imprime no console linha por linha acrescentando  um "*"
por linha até o total de vezes digitado no prompt"
*/

// "RESPOSTA: *
//**
//***
//****"

// -------------------------------exercicios de escrita---------------------------

// exercício 1

// let quantosPet = Number(prompt("quantos pets você têm?"));
// let condicao = quantosPet === 0;
// let condicao2 = quantosPet > 0;
// let bichinho = [];

// if (condicao) {
//   console.log("que pena! você pode adotar um pet!");
// } else if (condicao2) {
//   for (let i = 0; i < quantosPet; i++)
//     bichinho.push(prompt("qual o nome de seu ou seus pets?"));
// }

// console.log(bichinho);

// exercicio 2

// a)

// let array = [1, 5, 10, 15, 20, 25, 30];

// for (let i = 0; i < array.length; i++) {
//   const index = array[i];
//   console.log(index);
// }

//b)

// let array = [1, 5, 10, 15, 20, 25, 30];

// for (let i = 0; i < array.length; i++) {
//   const index = array[i];
//   console.log(index / 2);
// }

//c)

// let array = [1, 5, 10, 15, 20, 25, 30];
// let arrayPares = [];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 == 0) {
//     arrayPares.push(array[i]);
//   }
// }

// console.log(arrayPares);

//d)

// let array = [1, 5, 10, 15, 20, 25, 30];
// let arrayPares = [];

// for (let i = 0; i < array.length; i++) {
//   const index = array[i];
//   console.log(`o elemento do index ${i} é ${index}`);
// }

//e)
