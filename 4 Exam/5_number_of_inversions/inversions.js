let inversions = 0
const merge = (left, right) => {
  const  result = []
  let i = 0
  let j = 0
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
      inversions += left.length - i
    }
  }
  return [...result, ...left.slice(i), ...right.slice(j)]
}

// Compute the number of inversions in a sequence of integers. The function should have runtime O(nlogn) in the worst case. 
const mergeSort = (array) => {
  if (array.length <= 1) {
    return array
  }
  const half = Math.floor(array.length / 2)
  const firstHalf = mergeSort(array.slice(0, half))
  const secondHalf = mergeSort(array.slice(half))
  const mergedArray = merge(firstHalf, secondHalf)
  return mergedArray;
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
    const sortedArray = mergeSort(arr)
    console.log(inversions);
    process.exit();
  });
});

module.exports = mergeSort;