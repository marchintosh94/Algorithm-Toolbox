const rl = require('readline').createInterface({
  input: process.stdin,
  terminal: false
})

process.stdin.setEncoding('utf8')

function minAndMax(i, j, ops, min, max) {
  let minVal = Infinity
  let maxVal = -Infinity
  for (let k = i; k < j; k++) {
    const a = eval(`(${max[i][k]})${ops[k]}(${max[k + 1][j]})`)
    const b = eval(`(${max[i][k]})${ops[k]}(${min[k + 1][j]})`)
    const c = eval(`(${min[i][k]})${ops[k]}(${max[k + 1][j]})`)
    const d = eval(`(${min[i][k]})${ops[k]}(${min[k + 1][j]})`)
    minVal = Math.min(minVal, a, b, c, d)
    maxVal = Math.max(maxVal, a, b, c, d)
  }
  return [minVal, maxVal]
}


function maximumValueOfAnArithmeticExpression(expression) {
  const numbers = expression.split('').filter((_, i) => i % 2 === 0).map(Number)
  const ops = expression.split('').filter((_, i) => i % 2 !== 0)
  const n = numbers.length
  const min = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity))
  const max = Array.from({ length: n }, () => Array.from({ length: n }, () => -Infinity))
  for (let i = 0; i < n; i++) {
    min[i][i] = numbers[i]
    max[i][i] = numbers[i]
  }
  for (let s = 1; s < n; s++) {
    for (let i = 0; i < n - s; i++) {
      const j = i + s
      const [minMax, maxMin] = minAndMax(i, j, ops, min, max)
      min[i][j] = minMax
      max[i][j] = maxMin
    }
  }
  return max[0][n - 1]
}


rl.once('line', line => {
  const expression = line.toString()
  console.log(maximumValueOfAnArithmeticExpression(expression))
  process.exit()
})


module.exports = maximumValueOfAnArithmeticExpression