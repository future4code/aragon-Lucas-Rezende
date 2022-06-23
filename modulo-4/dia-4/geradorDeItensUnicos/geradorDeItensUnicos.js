const primeiraLista = [
  {
    nome: "Banana",
  },
  {
    nome: "Laranja",
  },
];

const segundaLista = [
  {
    nome: "Laranja",
  },
  {
    nome: "Cebola",
  },
];

const geraItensUnicos = (firstArr, secondArr) => {
  const arrayConcat = firstArr.concat(secondArr);
  const resultado = [];

  for (let itemConcat of arrayConcat) {
    const itemResultado = resultado.find(
      (item) => item.nome === itemConcat.nome
    );

    if (!itemResultado) {
      resultado.push(itemConcat);
    }
  }
  return resultado;
};

console.log(geraItensUnicos(primeiraLista, segundaLista));
