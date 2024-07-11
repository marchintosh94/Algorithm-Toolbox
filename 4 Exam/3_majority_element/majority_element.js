// by Alexander Nikolskiy

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.once("line", (line) => {
  rl.once("line", (line) => {
    const arr = line.toString().split(" ").map(Number)
    console.log(majorityElement(arr))
    process.exit()
  });
});

// time complexity: O(n)
function majorityElement(arr) {
  // write your code here
  const half = arr.length / 2;
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
    if (map.get(arr[i]) > half) {
      return 1;
    }
  }
  return 0;
}

module.exports = majorityElement;
