// //Exercicio 1
// const year: string | number = 2020;

// //Exeercicio 2
// enum RainbowColors {
//   BLUE = "azul",
//   YELLOW = "yellow",
//   RED = "red",
//   GREEN = "green",
//   PINK = "pink",
//   ORANGE = "orange",
//   VIOLET = "violet",
// }

// type people = {
//   nome: string;
//   idade: number;
//   corFavorita: RainbowColors;
// };

// const macedo: people = {
//   nome: "lucas",
//   idade: 32,
//   corFavorita: RainbowColors.BLUE,
// };

// //Exercicio 3

// type TheMath = {
//   maior: number;
//   menor: number;
//   media: number;
// };

// function obterEstatisticas(numeros: number[]): TheMath {
//   const numerosOrdenados: number[] = numeros.sort((a, b) => a - b);

//   let soma: number = 0;

//   for (let num of numeros) {
//     soma += num;
//   }

//   const estatisticas = {
//     maior: numerosOrdenados[numeros.length - 1],
//     menor: numerosOrdenados[0],
//     media: soma / numeros.length,
//   };

//   return estatisticas;
// }

// //Exercicio 4
// type Post = {
//   autor: string;
//   texto: string;
// };

// const posts: Post[] = [
//   {
//     autor: "Alvo Dumbledore",
//     texto: "Não vale a pena viver sonhando e se esquecer de viver",
//   },
//   {
//     autor: "Severo Snape",
//     texto: "Menos 10 pontos para Grifinória!",
//   },
//   {
//     autor: "Hermione Granger",
//     texto: "É levi-ô-sa, não levio-sá!",
//   },
//   {
//     autor: "Dobby",
//     texto: "Dobby é um elfo livre!",
//   },
//   {
//     autor: "Lord Voldemort",
//     texto: "Avada Kedavra!",
//   },
// ];

// function buscarPostsPorAutor(posts: Post[], autorInformado: string): Post[] {
//   return posts.filter((post) => {
//     return post.autor === autorInformado;
//   });
// }
