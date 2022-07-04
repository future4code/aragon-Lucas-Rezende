// //Exercício 1

// function checaTriangulo(a: number, b: number, c: number): string {
//   if (a !== b && b !== c) {
//     return "Escaleno";
//   } else if (a === b && b === c) {
//     return "Equilátero";
//   } else {
//     return "Isósceles";
//   }
// }

// console.log(checaTriangulo(7, 7, 7));
// console.log(checaTriangulo(7, 7, 9));
// console.log(checaTriangulo(7, 8, 9));

// // EExercício 2

// function imprimeTresCoresFavoritas(
//   cor1: string,
//   cor2: string,
//   cor3: string
// ): void {
//   console.log([cor1, cor2, cor3]);
// }

// imprimeTresCoresFavoritas(process.argv[2], process.argv[3], process.argv[4]);

//Exercício 3

// function checaAnoBissexto(ano: number): boolean {
//   const cond1 = ano % 400 === 0;
//   const cond2 = ano % 4 === 0 && ano % 100 !== 0;
//   return cond1 || cond2;
// }

// console.log(checaAnoBissexto(2022));
// console.log(checaAnoBissexto(2020));

// //Exercício 4

// function comparaDoisNumeros(num1: number, num2: number): number {
//   let maiorNumero;
//   let menorNumero;

//   if (num1 > num2) {
//     maiorNumero = num1;
//     menorNumero = num2;
//   } else {
//     maiorNumero = num2;
//     menorNumero = num1;
//   }

//   const diferenca = maiorNumero - menorNumero;

//   return diferenca;
// }

// console.log(comparaDoisNumeros(20, 50));

//Exercício 5

// function checaRenovacaoRG(
//   anoAtual: number,
//   anoNascimento: number,
//   anoEmissao: number
// ): boolean {
//   const idade = anoAtual - anoNascimento;
//   const tempoCarteira = anoAtual - anoEmissao;

//   const cond1 = idade <= 20 && tempoCarteira >= 5;
//   const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10;
//   const cond3 = idade > 50 && tempoCarteira >= 15;

//   return cond1 || cond2 || cond3;
// }

// console.log(
//   checaRenovacaoRG(
//     Number(process.argv[2]),
//     Number(process.argv[3]),
//     Number(process.argv[4])
//   )
// );
