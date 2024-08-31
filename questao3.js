/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

const fs = require('fs');

fs.readFile('faturamento.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    const faturamentoMensal = JSON.parse(data);

    const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);

    const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));

    const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

    const somaFaturamento = diasComFaturamento.reduce((soma, dia) => soma + dia.valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;

    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

    console.log(`Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`);
});
