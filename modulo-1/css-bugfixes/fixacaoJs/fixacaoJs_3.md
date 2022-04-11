function calculaNota(ex, p1, p2) {
// Escreva seu código aqui
let peso1 = 1;
let peso2 = 2;
let peso3 = 3;
let exPeso = ex _ peso1;
let p1Peso = p1 _ peso2;
let p2Peso = p2 \* peso3;
let media = exPeso + p1Peso + p2Peso;
let ponderada = media / (peso1+peso2+peso3);

if (ponderada >= 9) {
return "A";
} else if (ponderada < 9 && ponderada >= 7.5) {
return "B";
} else if (ponderada < 7.5 && ponderada >= 6) {
return "C";
} else ponderada < 6;
return "D";
}
