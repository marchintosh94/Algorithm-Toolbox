/*
  Collecting Signatures
  Covering Segments by Points Problem
  Find the minimum number of points needed to cover all given segments on a line.
  
  Input: A sequence of n segments [l1, r1], . . . , [ln, rn] on a line.
  Output: 
  A set of points of minimum size such that each segment [li , ri ] contains a point, i.e., 
  there exists a point x from this set such that li ≤ x ≤ ri.

  Input format:
  The first line of the input contains the number n of segments. 
  Each of the following n lines contains two integers li and ri (separated by a space) defining the coordinates of endpoints of the i-th segment. 
  Output format:
  The minimum number k of points on the first line and the integer coordinates of k points (separated by spaces) on the second line. You can output the points in any order. If there are multiple such sets of points, you can output any of them. 
  Constraints: 1 ≤ n ≤ 100; 0 ≤ li ≤ ri ≤ 109 for all i.
*/

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
})

process.stdin.setEncoding('utf-8')

rl.once('line', (line) => {
  const n = Number(line.toString())
  const segments = []
  rl.on('line', (line) => {
    const segment = line
      .toString()
      .split(' ')
      .map(Number)
    segments.push(segment)
    if (segments.length === n) {
      console.log(collectingSignatures(n, segments.sort((a, b) => a[1] - b[1])))
      process.exit()
    }
  })
})

const collectingSignatures = (n, segments) => {
  const points = []
  let point = segments[0][1]
  points.push(point)
  for (let i = 1; i < n; i++) {
    if (point < segments[i][0] || point > segments[i][1]) {
      point = segments[i][1]
      points.push(point)
    }
  }
  return `${points.length}\n${points.join(' ')}`
}

module.exports = collectingSignatures