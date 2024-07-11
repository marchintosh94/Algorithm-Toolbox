/*
  Maximum Advertisement Revenue 
  Maximum Product of Two Sequences Problem 
  
  Find the maximum dot product of two sequences of numbers. 
  Input: 
  Two sequences of n positive integers: price1, . . . , pricen and clicks1, . . . , clicksn. 
  Output: 
  The maximum value of price1 · c1 + · · · + pricen · cn, where c1, . . . , cn is a permutation of clicks1, . . . , clicksn.

  Input format: 
  The first line contains an integer n, the second one contains a sequence of integers price1, . . . , pricen, the third one contains a sequence of integers clicks1, . . . , clicksn. 
  Output format: 
  Output the maximum value of (price1 · c1 + · · · + pricen · cn), where c1, . . . , cn is a permutation of clicks1, . . . , clicksn. 
  Constraints: 
  1 ≤ n ≤ 103; 0 ≤ pricei , clicksi ≤ 105 for all 1 ≤ i ≤ n.
*/

const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
})

process.stdin.setEncoding("utf8")

rl.once("line", (line) => {
  const n = Number(line.toString())
  rl.once("line", (line) => {
    const prices = line
      .toString()
      .split(" ")
      .map(Number)
    rl.once("line", (line) => {
      const clicks = line
        .toString()
        .split(" ")
        .map(Number)
      console.log(maximumAdvertisementRevenue(n, prices, clicks))
      process.exit()
    })
  })
})

const maximumAdvertisementRevenue = (n, prices, clicks) => {
  prices.sort((a, b) => a - b)
  clicks.sort((a, b) => a - b)
  let maxRevenue = 0
  for (let i = 0; i < n; i++) {
    maxRevenue += prices[i] * clicks[i]
  }
  return maxRevenue
}

module.exports = maximumAdvertisementRevenue