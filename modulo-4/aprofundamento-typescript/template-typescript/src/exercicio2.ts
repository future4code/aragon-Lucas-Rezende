//Exeercicio 2
enum RainbowColors {
  BLUE = "azul",
  YELLOW = "yellow",
  RED = "red",
  GREEN = "green",
  PINK = "pink",
  ORANGE = "orange",
  VIOLET = "violet",
}

type People = {
  nome: string;
  idade: number;
  corFavorita: RainbowColors;
};

const macedo: People = {
  nome: "lucas",
  idade: 32,
  corFavorita: RainbowColors.BLUE,
};

console.log(macedo);
