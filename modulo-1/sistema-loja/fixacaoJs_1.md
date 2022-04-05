function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
// Escreva seu código aqui
const salarioFixo = 2000
const comissao = 100*qtdeCarrosVendidos+valorTotalVendas*0.05

return salarioFixo + comissao
}
