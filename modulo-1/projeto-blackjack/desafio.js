/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

carta = comprarCarta();
carta2 = comprarCarta();
carta3 = comprarCarta();
carta4 = comprarCarta();

let somaUsuario = carta.valor + carta2.valor;
let somaComputador = carta3.valor + carta4.valor;
let usuarioWin = somaUsuario > somaComputador;
let empate = somaUsuario == somaComputador;

function blackJack() {
  if (
    confirm("bem vindo ao jogo de black jack! quer iniciar uma nova rodada?")
  ) {
    if (somaComputador <= 21 || somaUsuario >= 21) {
      confirm(
        `suas cartas são: ${carta.texto} ${carta2.texto} a carta revelada do computador é : ${carta3.texto}`
      );
      confirm(`deseja comprar outra carta?`);
    } else {
      confirm("bem vindo ao jogo black jack! quer iniciar uma nova rodada?");
    }
  } else {
    confirm("O jogo acabou!");
  }
}

function resultado() {
  if (usuarioWin === true && empate === false) {
    confirm(`o usuário ganhou!`);
  } else if (usuarioWin === false && empate === false) {
    confirm(`o computador ganhou!`);
  } else confirm(`empate!`);
}

function comprarMaiscartas() {}

blackJack();
resultado();
