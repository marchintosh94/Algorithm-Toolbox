/*
  Maximum Number of Prizes
  Distinct Summands Problem
  Represent a positive integer as the sum of the maximum number of pairwise distinct positive integers.
  Input: A positive integer n.
  Output: The maximum k such that n can be represented as the sum a1 + · · · + ak of k distinct positive integers.

  Input format: 
  An integer n. 
  Output format: 
  In the first line, output the maximum number k such that n can be represented as the sum of k pairwise distinct positive integers. 
  In the second line, output k pairwise distinct positive integers that sum up to n (if there are multiple such representations, output any of them). 
  Constraints: 1 ≤ n ≤ 109.
*/

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
})

process.stdin.setEncoding('utf-8')

rl.once('line', (line) => {
  const n = Number(line.toString())
  console.log(maximumNumberOfPrizes(n))
  process.exit()
})


const maximumNumberOfPrizes = (n) => {
  let prizes = []
  let remaining = n
  let current = 1
  while (remaining > 2 * current) {
    prizes.push(current)
    remaining -= current
    current++
  }
  prizes.push(remaining)
  return `${prizes.length}\n${prizes.join(' ')}`
}

module.exports = maximumNumberOfPrizes

