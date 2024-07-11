function maxAmountOfGold(capacity, elementsWeight) {
  const dp = new Array(capacity + 1).fill(0)
  for (let i = 1; i <= elementsWeight.length; i++) {
    for (let w = capacity; w >= 0; w--) {
      if (elementsWeight[i - 1] <= w) {
        dp[w] = Math.max(dp[w], dp[w - elementsWeight[i - 1]] + elementsWeight[i - 1])
      }
    }
  }
  return dp[capacity]
}

const rl = require('readline').createInterface({
  input: process.stdin,
  terminal: false
})

process.stdin.setEncoding('utf8')

rl.once('line', line => {
  const [capacity, elementsN] = line.toString().split(' ').map(Number)
  rl.once('line', line => {
    const elementsWeight = line.toString().split(' ').map(Number)
    console.log(maxAmountOfGold(capacity, elementsWeight))
    process.exit()
  })
})


module.exports = maxAmountOfGold