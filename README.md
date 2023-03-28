# Questionário da entrevista - Target Sistemas

## Questionário 01

1\) Observe o trecho de código abaixo:

```
int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);
```

Ao final do processamento, qual será o valor da variável SOMA?

&nbsp;
### Resolução

A variável soma guardará o valor **91**.

---

## Questionário 02

2\) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

&nbsp;
### Resolução

- Linguagem: JavaScript.
- O arquivo `Q02.js` na pasta `códigos` contém a resolução abaixo.
```JavaScript
const procuraEmFibonacci = (num) => {
    let fib = [0, 1]

    while(fib[fib.length - 1] < num) {
        let valor = fib[fib.length - 1] + fib[fib.length - 2]
        fib.push(valor)
    }

    return fib.find(v => v === num) != undefined ? 'O número informado pertence a sequência :)' : 'O número informado não pertence a sequência!'
}

console.log(procuraEmFibonacci(7))
```
---

## Questionário 03

3\) Descubra a lógica e complete o próximo elemento:

a\) 1, 3, 5, 7, ___

b\) 2, 4, 8, 16, 32, 64, ____

c\) 0, 1, 4, 9, 16, 25, 36, ____

d\) 4, 16, 36, 64, ____

e\) 1, 1, 2, 3, 5, 8, ____

f\) 2,10, 12, 16, 17, 18, 19, ____

&nbsp;
### Resolução

a\) 1, 3, 5, 7, **9**

b\) 2, 4, 8, 16, 32, 64, **128**

c\) 0, 1, 4, 9, 16, 25, 36, **49**

d\) 4, 16, 36, 64, **100**

e\) 1, 1, 2, 3, 5, 8, **13**

f\) 2, 10, 12, 16, 17, 18, 19, **23**

---

## Questão 04  

4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

### Resolução

Quando os veículos se cruzarem, ambos estarão a mesma distância de Riberão Preto naquele ponto da rodovia.

---

## Questão 05

5) Escreva um programa que inverta os caracteres de um string.



IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;

### Resolução

- Linguagem: JavaScrip.
- O código abaixo pode ser encontrado no arquivo `Q05.js` na pasta `códigos`.

```JavaScript
const inverteCarac = (str) => {
    let novaStr = ''
    let tamanhoStr = str.length

    while (tamanhoStr > 0) {
        novaStr += str[tamanhoStr - 1]
        tamanhoStr--
    }
    return novaStr
}

console.log(inverteCarac('JavaScript'))
```