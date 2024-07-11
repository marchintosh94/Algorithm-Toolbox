// by marchintosh

const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
})

process.stdin.setEncoding("utf8")
rl.on("line", readLine)

function readLine(line) {
  console.log(getLastDigitSumSquareFibonacci(parseInt(line, 10)))
  process.exit()
}


function getLastDigitSumSquareFibonacci(n) {
  if (n <= 1) {
    return n
  }
  const fibonacciNumberList = [0, 1]
  let period = 0
  for (let i = 2; i <= n; i++) {
    fibonacciNumberList.push(
      (fibonacciNumberList[i - 1] + fibonacciNumberList[i - 2]) % 10
    )
    // Check if the period is found
    if (fibonacciNumberList[i] === 1 && fibonacciNumberList[i - 1] === 0) {
      period = i - 1
      break
    }
  }

  if (period === 0) {
    return fibonacciNumberList.reduce((a, b) => a + b ** 2) % 10
  }
  const remainder = n % period
  return fibonacciNumberList.slice(0, remainder + 1).reduce((a, b) => a + b ** 2) % 10
}

module.exports = getLastDigitSumSquareFibonacci