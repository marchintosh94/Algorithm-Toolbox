// by marchintosh

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  if (line !== "\n") {
    const m = parseInt(line.toString().split(" ")[0], 10);
    const n = parseInt(line.toString().split(" ")[1], 10);

    console.log(getFibonacciPartialSum(m, n));
    process.exit();
  }
}

function getFibonacciPartialSum(m, n) {
  if (n <= 1) {
    return n;
  }
  const fibonacciNumberList = [0, 1];
  let period = 0;
  for (let i = 2; i <= n + 2; i++) {
    fibonacciNumberList.push(
      (fibonacciNumberList[i - 1] + fibonacciNumberList[i - 2]) % 10
    );
    if (fibonacciNumberList[i] === 1 && fibonacciNumberList[i - 1] === 0) {
      period = i - 1;
      break;
    }
  }

  if (period === 0) {
    return (
      (fibonacciNumberList[n + 2] - fibonacciNumberList[m + 1] + 10) % 10
    );
  }
  const remainderN = (n + 2) % period;
  const remainderM = (m + 1) % period;
  return (
    (fibonacciNumberList[remainderN] - fibonacciNumberList[remainderM] + 10) % 10
  );

}

module.exports = getFibonacciPartialSum;
