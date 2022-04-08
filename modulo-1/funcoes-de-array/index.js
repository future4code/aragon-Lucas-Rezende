// -----------------------exercicios de interpretação----------------------------------

// exercicio 1

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" }
// ]

// const novoArrayA = usuarios.map((item, index, array) => {
//    console.log(item, index, array)
// })

// a) O que vai ser impresso no console?
// "RESPOSTA:
// [{ nome: "Amanda Rangel", apelido: "Mandi" },
//  { nome: "Laís Petra", apelido: "Laura" },
//  { nome: "Letícia Chijo", apelido: "Chijo" }]."

// exercicio 2

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayB = usuarios.map((item, index, array) => {
//    return item.nome
// })

// console.log(novoArrayB)

// a) O que vai ser impresso no console?
// "RESPOSTA:
//   [{ nome: "Amanda Rangel"},
//   { nome: "Laís Petra" },
//   { nome: "Letícia Chijo"}]."

// exercicio 3

// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//    return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)

//a) O que vai ser impresso no console?
// "RESPOSTA:
//   [{ nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" }]."

// -------------------------------exercicios de escrita----------------------------

// exercicio 1

// a)

const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];
const petsNome = pets.map((item, index, array) => {
  return item.nome;
});

console.log(petsNome);

// b)

const petsNomeSalsicha = pets.filter((item, index, array) => {
  return item.raca == "Salsicha";
});

console.log(petsNomeSalsicha);

// c)

let poodleDesconto = [];

const petsNomePoodle = pets.filter((item, index, array) => {
  return item.raca == "Poodle";
});

const petsSomentePoodleNome = petsNomePoodle.map((item, index, array) => {
  return item.nome;
});

console.log(petsNomePoodle);

let i = 0;
let enviaDesconto = [];

for (i = 0; i < petsNomePoodle.length; i++) {
  desconto = `Você ganhou um cupom de desconto de 10% para tosar o/a ${petsSomentePoodleNome[i]}`;
  enviaDesconto = [...enviaDesconto, desconto];
}
console.log(enviaDesconto);

// exercicio 2

// a)

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

const nomeProdutos = produtos.map((item, index, array) => {
  return item.nome;
});

console.log(nomeProdutos);

// b)

const nomeEPrecoProdutos = produtos.map((item, index, array) => {
  return [item.nome, item.preco * 0.95];
});

console.log(nomeEPrecoProdutos);

// c)

const produtosBebidas = produtos.filter((item) => {
  return item.categoria === "Bebidas";
});

console.log(produtosBebidas);

// d)

const produtosYpe = produtos.filter((item) => {
  return item.nome.includes("Ypê");
});

console.log(produtosYpe);

// e)

const produtoNomePreco = produtos.map((item) => {
  return `Compre ${item.nome} por R$ ${item.preco}.`;
});
console.log(produtoNomePreco);
