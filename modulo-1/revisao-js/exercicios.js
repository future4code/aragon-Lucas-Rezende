// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function Compare(a, b) {
  return a - b;
}
function retornaArrayOrdenado(array) {
  return array.sort(Compare);
}

// EXERCÍCIO 04

function retornaNumerosPares(array) {
  let pares = array.filter((numero) => numero % 2 === 0);
  return pares;
}

// EXERCÍCIO 05

function retornaNumerosParesElevadosADois(array) {
  let numerosPares = array.filter((x) => x % 2 === 0);
  let numerosParesAoQuadrado = numerosPares.map((numero) => numero ** 2);
  return numerosParesAoQuadrado;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = 0;
  for (numero of array) {
    if (maiorNumero < numero) {
      maiorNumero = numero;
    }
  }
  return maiorNumero;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
