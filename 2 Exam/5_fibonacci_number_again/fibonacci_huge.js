// by marchintosh

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const n = parseInt(line.toString().split(' ')[0], 10);
        const m = parseInt(line.toString().split(' ')[1], 10);

        console.log(getFibMod(n, m));
        process.exit();
    }
}

/*
    Compute the n-th Fibonacci number modulo m. Input: Integers n and m. Output: n-th Fibonacci number modulo m.
*/
function getFibMod(n, m) {
    const fibonacciNumberList = [0, 1]
    let period = 0
    for (let i = 2; i <= n; i++) {

        fibonacciNumberList.push(
            (fibonacciNumberList[i - 1] + fibonacciNumberList[i - 2]) % m
        )
        // Check if the period is found
        if (fibonacciNumberList[i] === 1 && fibonacciNumberList[i - 1] === 0) {
            period = i - 1
            break
        }
    }

    if (period === 0) {
        return fibonacciNumberList[n]
    }
    const remainder = n % period
    return fibonacciNumberList[remainder]
}

module.exports = getFibMod;
