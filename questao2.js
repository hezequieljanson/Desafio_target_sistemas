/* 
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre 
será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule 
a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function pertenceFibonacci(numero, i = 0) {
    const fib = fibonacci(i);

    if (fib === numero) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    }

    if (fib > numero) {
        return `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
    }

    return pertenceFibonacci(numero, i + 1);
}

let numero = 21;
console.log(pertenceFibonacci(numero));

