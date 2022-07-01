type Product = {
  nome: string;
  quantidade: number;
  valorUnitario: any;
};

const productList: Product[] = [
  { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
  { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
  { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
  { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
  { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
  { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
  { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 },
];

const ajustaPreco = (preco: number): string => {
  const valorAjustado: string = preco.toFixed(2).replace(".", ",");
  return "R$ " + valorAjustado;
};

const updateList = (productList: Product[]): Product[] => {
  const newListPrice = productList.map((product) => {
    let newPrice = "";

    for (let element of productList) {
      newPrice = ajustaPreco(product.valorUnitario);
    }
    const listPriceUpdate: Product = {
      nome: product.nome,
      quantidade: product.quantidade,
      valorUnitario: newPrice,
    };

    return listPriceUpdate;
  });
  const result: Product[] = newListPrice.filter((item: Product) => {
    return newListPrice;
  });

  return result.sort(function (a, b) {
    return a.quantidade > b.quantidade
      ? -1
      : a.quantidade < b.quantidade
      ? 1
      : 0;
  });
};

console.log(updateList(productList));
