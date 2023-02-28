// Encontrando o menor e o maior valor de faturamento diário
let menorValor = faturamentoMensal[0].valor;
let maiorValor = faturamentoMensal[0].valor;

for (let i = 1; i < faturamentoMensal.length; i++) {
    const valor = faturamentoMensal[i].valor;
    if (valor < menorValor) {
        menorValor = valor;
    }
    if (valor > maiorValor) {
        maiorValor = valor;
    }
}

console.log("Menor valor de faturamento diário: R$" + menorValor.toFixed(2));
console.log("Maior valor de faturamento diário: R$" + maiorValor.toFixed(2));

// Calculando a média mensal de faturamento diário, ignorando dias sem faturamento
let totalFaturamento = 0;
let numDiasComFaturamento = 0;

for (let i = 0; i < faturamentoMensal.length; i++) {
    const valor = faturamentoMensal[i].valor;
    if (valor > 0) { // considera apenas dias com faturamento positivo
        totalFaturamento += valor;
        numDiasComFaturamento++;
    }
}

const mediaMensal = totalFaturamento / numDiasComFaturamento;

// Contando o número de dias em que o faturamento diário foi superior à média mensal
let numDiasAcimaDaMedia = 0;

for (let i = 0; i < faturamentoMensal.length; i++) {
    const valor = faturamentoMensal[i].valor;
    if (valor > mediaMensal) {
        numDiasAcimaDaMedia++;
    }
}

console.log("Número de dias com faturamento acima da média mensal: " + numDiasAcimaDaMedia);