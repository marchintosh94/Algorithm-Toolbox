function randomizedQuickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let less = []
  const equal = []
  const greater = []
  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr[pivotIndex]
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] < pivot[0]) {
      less.push(arr[i])
    } else if (arr[i][0] === pivot[0]) {
      equal.push(arr[i])
    } else {
      greater.push(arr[i])
    }
  }
  return [
    ...randomizedQuickSort(less),
    ...equal.sort((a, b) => a[1].localeCompare(b[1])),
    ...randomizedQuickSort(greater),
  ]
}

/*
Points and Segments Problem 
Given a set of points and a set of segments on a line, compute, for each point, the number of segments it is contained in.
*/
const pointsCover = (lines, sortedPoints) => {
  const points = []
  for (let i = 0; i < lines.length; i++) {
    points.push([lines[i][0], "l"])
    points.push([lines[i][1], "r"])
  }
  for (let i = 0; i < sortedPoints.length; i++) {
    points.push([sortedPoints[i], "p", i])
  }
  const sortedPointsWithIndex = randomizedQuickSort(points)
  //console.log(sortedPointsWithIndex)
  const count = Array.from({ length: sortedPoints.length }, () => 0)
  let segments = 0
  for (let i = 0; i < sortedPointsWithIndex.length; i++) {
    if (sortedPointsWithIndex[i][1] === "l") {
      segments++
    } else if (
      sortedPointsWithIndex[i][1] === "r") {
      segments--;
    } else {
      count[sortedPointsWithIndex[i][2]] = segments;
    }
  }
  return count.join(" ")
}

const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
})

process.stdin.setEncoding("utf8")
rl.once("line", (line) => {
  const [numberOfSegments, numberOfPoints] = line
    .toString()
    .split(" ")
    .map(Number)
  const lines = []
  let lineNumber = 0
  rl.on("line", (line) => {
    lineNumber++
    if (lineNumber <= numberOfSegments) {
      lines.push(line.toString().split(" ").map(Number))
    } else {
      const points = line.toString().split(" ").map(Number)
      console.log(pointsCover(lines, points))
      process.exit()
    }
  })
})

module.exports = pointsCover
