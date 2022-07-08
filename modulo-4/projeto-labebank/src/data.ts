export type PaidAcount = {
  valor:number,
  descrição:string,
  dataDePagamento:string
}

export type ClientAcount = {
  id: number,
  nome:string,
  CPF:string,
  dataDeNascimento: string,
  saldo:number,
  listaDeContasPagas:PaidAcount[]
}

export const clientList:ClientAcount[]=[
{
  id: 1,
  nome:"lucas macedo",
  CPF:"111.111.111-11",
  dataDeNascimento: "26/04/1990",
  saldo:0,
  listaDeContasPagas:[
    {
      valor:50,
      descrição:"mc donald",
      dataDePagamento:"07/07/2022" 
    }
  ] 
}
]

