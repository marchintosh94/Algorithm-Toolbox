
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
})
process.stdin.setEncoding('utf8')

rl.once('line', line => {
  const m = parseInt(line)
  const change = getChange(m);
  console.log(change.length);
  process.exit()
})


function getChange(money, denominations = [1, 3, 4]) {
  const result = []
  const _denominations = denominations.sort((a, b) => b - a)
  let rest = money
  while (rest > 0){
    let coin = 0
    for(const d of _denominations){
      if (rest % d === 0 && d != 1){
        coin = d
        rest -= d
        break
      }
    }
    if (coin){
      result.push(coin)
      continue
    }
    for(const d of _denominations){
      if (rest - d >= 0){
        coin = d
        rest -= d
        break
      }
    }
    if (coin){
      result.push(coin)
      continue
    }
  }
  return result
}

module.exports = getChange