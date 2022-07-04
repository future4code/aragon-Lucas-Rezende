//Exercicio 3

type TheMath = {
  maior: number;
  menor: number;
  media: number;
};

function obterEstatisticas(numeros: number[]): TheMath {
  const numerosOrdenados: number[] = numeros.sort((a, b) => a - b);

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

console.log(obterEstatisticas([10, 20, 30, 40, 50, 60, 70]));
