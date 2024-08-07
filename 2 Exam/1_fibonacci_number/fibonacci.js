// marchintosh

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

function fib(n) {
    const fibonacciNumberList = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibonacciNumberList.push(fibonacciNumberList[i - 1] + fibonacciNumberList[i - 2]);
    }
    return fibonacciNumberList[n];
}

module.exports = fib;
