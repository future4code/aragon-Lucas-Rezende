// -------------------- exercicio de interpretação ------------------------
//exercicio 1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza?
// testa se o número é par.

// b) Para que tipos de números ele imprime no console "Passou no teste"?
// nimeros numeros dicisiveis por 2.

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// numeros que não são divisiveis por 2;

//exercicio 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// para achar o preço da fruta inserido no prompt.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// "O preço da fruta, maçã, é, R$ 2,25"

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem
// impressa no console se retirássemos o `break` que está logo acima do `default`
//  (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// "O preço da fruta, pêra, é, R$ 5"

// exercicio 3

// const numero = Number(prompt("Digite o primeiro número."));

// if (numero > 0) {
//   console.log("Esse número passou no teste");
//   let mensagem = "Essa mensagem é secreta!!!";
// }

// console.log(mensagem);

// a) O que a primeira linha está fazendo?
// guardando um dado enviado pelo prompt na variável numero.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal?
// E se fosse o número -10?
//  10 "Esse número passou no teste"
// -10 não exibirá nada

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// aparecerá um erro pois a variável mensagem esta dentro ddo escopo local

// -----------------------------exercicio de escrita----------------------------------

// exercicio 1

const idade = Number(prompt("qual a sua idade?"));

function idadeParaDirigir() {
  if (idade >= 18) {
    console.log("você pode dirigir!");
  } else {
    console.log("você não pode dirigir");
  }
}

idadeParaDirigir();

// //exercicio 2

let turno0 = prompt("qual turno você estuda?M matutino/V vespertino/N noturno");

function qualTurnoEstuda0(turno0) {
  if ("M" === turno0) {
    return "Bom dia!";
  } else if ("V" === turno0) return "Boa tarde!";
  else "N" === turno0;
  return "Boa noite!";
}

console.log(qualTurnoEstuda0(turno0));

// // exercicio 3

let turno = prompt("qual turno você estuda?M matutino/V vespertino/N noturno");

let qualTurnoEstuda;
switch (turno) {
  case "M":
    qualTurnoEstuda = "Bom Dia!";
    break;

  case "V":
    qualTurnoEstuda = "Boa tarde!";
    break;

  case "N":
    qualTurnoEstuda = "Boa noite!";
    break;
}

console.log(qualTurnoEstuda);

// exercicio 4

let qualGeneroDeFilmeQuerAssitir2 = prompt(
  "qual genero de filme quer assistir?"
);
let qualOPrecoDoIngresso2 = Number(prompt("qual o preço do ingresso?:"));

function querAssistirAoFilme(
  qualGeneroDeFilmeQuerAssitir2,
  qualOPrecoDoIngresso2
) {
  if (
    qualGeneroDeFilmeQuerAssitir2 === "fantasia" &&
    qualOPrecoDoIngresso2 < 15
  ) {
    console.log("Bom filme!");
  }
  console.log("Escolha outro filme!");
}

querAssistirAoFilme(qualGeneroDeFilmeQuerAssitir2, qualOPrecoDoIngresso2);

// desafio

//exercicio 1
let qualGeneroDeFilmeQuerAssitir = prompt(
  "qual genero de filme quer assistir?"
);
let qualOPrecoDoIngresso = Number(prompt("qual o preço do ingresso?:"));
let lanchinho = "";
function querAssistirAoFilme(
  qualGeneroDeFilmeQuerAssitir,
  qualOPrecoDoIngresso
) {
  if (
    qualGeneroDeFilmeQuerAssitir === "fantasia" &&
    qualOPrecoDoIngresso < 15
  ) {
    lanchinho = prompt("qual lanchinho você vai comprar?(pipoca,coca,doce)");
    console.log(`Bom filme e aproveite seu/sua ${lanchinho}`);
  } else {
    console.log("Escolha outro filme!");
  }
}

querAssistirAoFilme(qualGeneroDeFilmeQuerAssitir, qualOPrecoDoIngresso);

// exercicio 2

let nomeCompleto = prompt("nome completo?");
let tipoDeJogo = prompt("tipo do jogo?IN internacional/DO doméstico;");
let etapaDoJogo = prompt(
  "qual a etapa do jogo? SF semi-final/DT decisão de terceiro lugar/FI final"
);
let categoria = prompt("qual a categoria?1, 2, 3 ou 4");
let quantidade = Number(prompt("qual a quantidade de ingressos?"));

let preco;

function valorDoTicket(etapaDoJogo, categoria) {
  if (etapaDoJogo === "SF" && categoria === "1") {
    return (preco = 1320);
  } else if (etapaDoJogo === "SF" && categoria === "2") {
    return (preco = 880);
  } else if (etapaDoJogo === "SF" && categoria === "3") {
    return (preco = 550);
  } else if (etapaDoJogo === "SF" && categoria === "4") {
    return (preco = 220);
  }
}

console.log(valorDoTicket());

function emissaoDoTicket(
  nomeCompleto,
  tipoDeJogo,
  etapaDoJogo,
  categoria,
  quantidade
) {
  if (tipoDeJogo === "DO") {
    console.log(
      `--------dados da compra--------
    nome do cliente: ${nomeCompleto}
    tipo do jogo: ${tipoDeJogo}
    etapa do jogo: ${etapaDoJogo}
    categoria: ${categoria}
    quantidade de ingressos: ${quantidade}
    ------------valores---------------
    valor do ingresso: 
    valor total:`
    );
  } else if (tipoDeJogo === "IN") {
    console.log(
      `--------dados da compra--------
    nome do cliente: ${nomeCompleto}
    tipo do jogo: ${tipoDeJogo}
    etapa do jogo: ${etapaDoJogo}
    categoria: ${categoria}
    quamtidade de ingressos: ${quantidade}
    ------------valores---------------
    valor do ingresso:
    valor total:`
    );
  }
}

emissaoDoTicket(nomeCompleto, tipoDeJogo, etapaDoJogo, categoria, quantidade);
