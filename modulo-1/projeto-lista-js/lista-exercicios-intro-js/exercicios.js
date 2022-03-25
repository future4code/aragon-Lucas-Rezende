// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("me diga uma altura?"));
  const largura = Number(prompt("me diga uma altura?"));
  console.log(altura * largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("me diga em que ano estamos?"));
  const anoNascimento = Number(prompt("me diga seu ano de nascimento?"));
  console.log(anoAtual - anoNascimento);
}

// EXERCÍCIO 03
function calculaIMC() {
  // implemente sua lógica aqui
  const pesoKg = Number(prompt("qual o seu peso em kg?"));
  const alturaM = Number(prompt("qual a sua altura em metros?"));
  return pesoKg / (alturaM * alturaM);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("qual a sua 1° cor favorita?");
  const cor2 = prompt("qual a sua 2° cor favorita?");
  const cor3 = prompt("qual a sua 3° cor favorita?");
  console.log([cor1, cor2, cor3]);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop();
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  return [array.pop(), array[0]];
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt("ano atual");
  const anoDeNascimento = prompt("ano nascimento");
  const anoDeEmissaoIdent = prompt("ano emissão RG");
  const minnhaIdade = anoAtual - anoDeNascimento;
  const aQuantosAnosEmiti = anoAtual - anoDeEmissaoIdent;
  console.log(minnhaIdade <= 20 || minnhaIdade > 20 <= 50 || minnhaIdade >= 50);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const div4 = ano % 4;
  const div400 = ano % 400;
  const div100 = ano % 100;
  const A = div4 + div400;
  const B = div100 + div4 + div400;
  return A === 0 && B != 0;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}
