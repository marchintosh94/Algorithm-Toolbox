const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
})

process.stdin.setEncoding('utf-8')
rl.once('line', (line) => {
  const n = Number(line.toString())
  rl.once('line', (line) => {
    const numbers = line.toString().split(" ").map(Number)
    if (numbers.length === n) {
      console.log(largestNumber(n, numbers))
      process.exit()
    }
  })
})

const largestNumber = (n, numbers) => {
  const compare = (a, b) => {
    const ab = Number(`${a}${b}`)
    const ba = Number(`${b}${a}`)
    return ba - ab
  }
  return numbers.sort(compare).join('')
}

module.exports = largestNumber