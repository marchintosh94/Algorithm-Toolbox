/*
  Car Fueling Problem Compute the minimum number of gas tank re-fills to get from one city to another. 
  
  Input: 
  Integers d and m, as well as a sequence of integers stop1 < stop2 < ... < stopn. 
  
  Output: 
  The minimum num- ber of refills to get from one city to another if a car can travel at most m miles on a full tank. 
  The distance between the cities is d miles and there are gas stations at distances stop1, stop2, . . . , stopn along the way. 
  We assume that a car starts with a full tank.

  Input format: 
  The first line contains an integer d. The second line contains an integer m. The third line specifies an integer n. Finally, the last line contains integers stop1, stop2, . . . , stopn. 
  Output format: 
  The minimum number of refills needed. If it is not possi- ble to reach the destination, output −1. 
  Constraints: 
  1 ≤ d ≤ 105. 1 ≤ m ≤ 400. 1 ≤ n ≤ 300. 0 < stop1 < stop2 < · · · < stopn < d
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");


rl.once("line", (line) => {
  const d = Number(line.toString())
  rl.once("line", (line) => {
    const m = Number(line.toString())
    rl.once("line", (line) => {
      const n = Number(line.toString())
      rl.once("line", (line) => {
        const stops = line
          .toString()
          .split(" ")
          .map(Number)
        console.log(minimumRefills(d, m, n, stops))
        process.exit()
      });
    });
  })
});

const minimumRefills = (d, m, n, stops) => {
  let numRefills = 0;
  let currentRefill = 0;
  let lastRefill = 0;
  let stopsCopy = [...stops];
  stopsCopy.unshift(0);
  stopsCopy.push(d);
  while (currentRefill <= n) {
    lastRefill = currentRefill;
    while (currentRefill <= n && stopsCopy[currentRefill + 1] - stopsCopy[lastRefill] <= m) {
      currentRefill += 1;
    }
    if (currentRefill === lastRefill) {
      return -1;
    }
    if (currentRefill <= n) {
      numRefills += 1;
    }
  }
  return numRefills;
}

module.exports = minimumRefills;
