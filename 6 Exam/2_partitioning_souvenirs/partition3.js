/*
  Three pirates are splitting their loot consisting of n items of varying value. 
  Can you help them to evenly split the loot? 
  You cannot split an item.
  Input format: The first line contains an integer n. The second line contains integers v1, v2, . . . , vn separated by spaces. 
  Output format: Output 1, if it possible to partition v1, v2, . . . , vn into three subsets with equal sums, and 0 otherwise. 
  Constraints. 1 ≤ n ≤ 20, 1 ≤ vi ≤ 30 for all i.
*/
function partition3(items) {
  if (items.length < 3) return 0
  const sum = items.reduce((acc, item) => acc + item, 0)
  if (sum % 3 !== 0) return 0
  const target = sum / 3
  const dp = Array.from({ length: target + 1 }, () => Array.from({ length: target + 1 }, () => Array.from({ length: target + 1 }, () => 0)))
  dp[0][0][0] = 1
  for (let i = 0; i < items.length; i++) {
    for (let j = target; j >= 0; j--) {
      for (let k = target; k >= 0; k--) {
        for (let l = target; l >= 0; l--) {
          if (j >= items[i]) dp[j][k][l] = dp[j][k][l] | dp[j - items[i]][k][l]
          if (k >= items[i]) dp[j][k][l] = dp[j][k][l] | dp[j][k - items[i]][l]
          if (l >= items[i]) dp[j][k][l] = dp[j][k][l] | dp[j][k][l - items[i]]
        }
      }
    }
  }
  return dp[target][target][target]
}

const rl = require('readline').createInterface({
  input: process.stdin,
  terminal: false
})

process.stdin.setEncoding('utf8')

rl.once('line', () => {
  rl.once('line', line => {
    const items = line.toString().split(' ').map(Number)
    console.log(partition3(items))
    process.exit()
  })
})


module.exports = partition3