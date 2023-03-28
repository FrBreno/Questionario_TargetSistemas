const procuraEmFibonacci = (num) => {
    let fib = [0, 1]

    while(fib[fib.length - 1] < num) {
        let valor = fib[fib.length - 1] + fib[fib.length - 2]
        fib.push(valor)
    }

    return fib.find(v => v === num) != undefined ? 'O número informado pertence a sequência :)' : 'O número informado não pertence a sequência!'
}

console.log(procuraEmFibonacci(7))