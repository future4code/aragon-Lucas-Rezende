// -------------------exercício de escrita ----------------

// exercício 1

// const filme = {
// 	nome: "Auto da Compadecida",
// 	ano: 2000,
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
// 		"Virginia Cavendish"
// 		],
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"},
// 		{canal: "Canal Brasil", horario: "19h"},
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0]) "RESPOSTA: matheus Nachterpaele"
// console.log(filme.elenco[filme.elenco.length - 1]) "RESPOSTA: 3"
// console.log(filme.transmissoesHoje[2]) "RESPOSTA: "Globo, horpario: "14h"

//a)
// console.log(filme.elenco[0]) "RESPOSTA: matheus Nachterpaele"
// console.log(filme.elenco[filme.elenco.length - 1]) "RESPOSTA: 3"
// console.log(filme.transmissoesHoje[2]) "RESPOSTA: "Globo, horpario: "14h"

// exercício 2

// const cachorro = {
//   nome: "Juca",
//   idade: 3,
//   raca: "SRD",
// };

// const gato = { ...cachorro, nome: "Juba" };

// const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") };

// console.log(cachorro);
// console.log(gato);
// console.log(tartaruga);

//a)
// console.log(cachorro) "RESPOTA: {nome: 'Juca', idade: 3, raca: 'SRD'}"
// console.log(gato) "RESPOSTA: {nome: 'Juba', idade: 3, raca: 'SRD'}"
// console.log(tartaruga) "RESPOSTA: {nome: 'Jubo', idade: 3, raca: 'SRD'}"

// //b)
// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// "RESPOSTA: copia todas as propriedades do objeto"

//3) exercicio 3

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio",
//   idade: 23,
//   backender: false,
// };

// console.log(minhaFuncao(pessoa, "backender"));
// console.log(minhaFuncao(pessoa, "altura"));

//a)
// console.log(minhaFuncao(pessoa, "backender")) "RESPOSTA: false"
// console.log(minhaFuncao(pessoa, "altura")) "RESPOSTA: undefined"

//b)
// "RESPOSTA: por que altura não é uma propriedade do objeto"

// -------------------------- exercício de escrita ------------------------------------

// exercicio 1

const pessoa = {
  nome: "lucas",
  apelidos: ["macedo", "macedão", "luquinhas"],
};

function imprimeFrase(objeto) {
  console.log(
    `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}.`
  );
}

imprimeFrase(pessoa);

const novosApelidos = {
  ...pessoa,
  apelidos: ["macedops", "macedos", "macedônia"],
};
imprimeFrase(novosApelidos);

// exercicio 2

//a)
const marido = {
  nome: "lucas",
  idade: 32,
  profissao: "programador",
};
const esposa = {
  nome: "carol",
  idade: 31,
  profissao: "fisioterapêuta",
};

//b)
function criaArray(objeto2) {
  return [
    objeto2.nome,
    objeto2.nome.length,
    objeto2.idade,
    objeto2.profissao,
    objeto2.profissao.length,
  ];
}

console.log(criaArray(marido));

// exercicio 3

//a)
const checkout = [];

//b)
const fruta1 = {
  nome: "banana",
  disponibilidade: true,
};
const fruta2 = {
  nome: "maçã",
  disponibilidade: true,
};
const fruta3 = {
  nome: "mamão",
  disponibilidade: true,
};

//c)
function imprimeCheckout(frutas) {
  console.log(checkout.push(frutas));
}

imprimeCheckout(fruta1);
imprimeCheckout(fruta2);
imprimeCheckout(fruta3);

console.log(checkout);

// desafio
const nome1 = prompt("nome");
const idade1 = Number(prompt("idade"));
const profissao1 = prompt("peofissao");

function informacoes() {
  return [nome1, idade1, profissao1];
}

function novoUsuario() {
  return (usuario = {
    nome: informacoes()[0],
    idade: informacoes()[1],
    profissao: informacoes()[2],
  });
}

console.log(novoUsuario());

// exercicio 2
const filme1 = {
  nome: "jurrasic park",
  anoDeLançamento: 1993,
};
const filme2 = {
  filme: "senhor dos aneis - a sociedade do anel",
  anoDeLançamento: 2001,
};

function comparaFilmes(filme1, filme2) {
  console.log(
    `O primeiro filme foi lançado antes do segundo?${
      filme2.anoDeLançamento < filme1.anoDeLançamento
    }.`
  );
  console.log(
    `O primeiro filme foi lançado no mesmo ano do segundo? ${
      filme1.anoDeLançamento == filme2.anoDeLançamento
    }.`
  );
}

comparaFilmes(filme1, filme2);

// exercicio 3
function disponibilidade(frutas) {
  return (frutas = { ...frutas, disponibilidade: !frutas.disponibilidade });
}

console.log(disponibilidade(fruta1));
