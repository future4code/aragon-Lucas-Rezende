enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type filme = {
  título: string;
  lançamento: number;
  genêro: GENERO;
  pontuação?: number;
};

const createFilm = (
  nome: string,
  anoLancamento: number,
  genero: GENERO,
  pontuacao?: number
): filme => {
  return pontuacao
    ? {
        título: nome,
        lançamento: anoLancamento,
        genêro: genero,
        pontuação: pontuacao,
      }
    : { título: nome, lançamento: anoLancamento, genêro: genero };
};

console.log(createFilm("star wars", 1980, GENERO.ACAO));
console.log(createFilm("star wars", 1980, GENERO.ACAO, 1000));
