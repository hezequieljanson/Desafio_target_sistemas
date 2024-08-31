/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 
*/

const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const valorTotal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);

const calcularPercentual = (valor, total) => (valor / total) * 100;

const exibirPercentuais = (faturamento) => {
    const percentualPorEstado = Object.entries(faturamento).map(([estado, valor]) => {
        const percentual = calcularPercentual(valor, valorTotal);
        return { estado, percentual: percentual.toFixed(2) };
    });

    percentualPorEstado.forEach(({ estado, percentual }) => {
        console.log(`Percentual de ${estado}: ${percentual}%`);
    });
};

exibirPercentuais(faturamentoPorEstado);