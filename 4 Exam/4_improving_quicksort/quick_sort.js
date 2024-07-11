// Sort a given sequence of numbers (that may contain duplicates) that works in O(nlogn) expected time.
function randomizedQuickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const less = [];
  const equal = [];
  const greater = [];
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else if (arr[i] === pivot) {
      equal.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return [
    ...randomizedQuickSort(less),
    ...equal,
    ...randomizedQuickSort(greater),
  ];
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.once("line", (line) => {
  rl.once("line", (line) => {
    const arr = line.toString().split(" ").map(Number);
    console.log(randomizedQuickSort(arr).join(" "));
    process.exit();
  });
})

module.exports = randomizedQuickSort;
