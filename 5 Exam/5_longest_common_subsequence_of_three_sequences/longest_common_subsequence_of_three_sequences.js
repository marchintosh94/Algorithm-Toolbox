const rl = require('readline').createInterface({
  input: process.stdin,
  terminal: false
})
process.stdin.setEncoding('utf8')

rl.once('line', line => {
  rl.once('line', line => {
    const sequence1 = line.toString().split(' ').map(Number)
    rl.once('line', line => {
      rl.once('line', line => {
        const sequence2 = line.toString().split(' ').map(Number)
        rl.once("line", (line) => {
          rl.once("line", (line) => {
            const sequence3 = line.toString().split(" ").map(Number)
            const result = longestCommonSubsequence(sequence1, sequence2, sequence3)
            console.log(result)
            process.exit()
          })
        })
      })
    })
  })
})



// Longest Common Subsequence of Three Sequences
// Given three sequences, find the length of the longest subsequence present in both of them.
// Time complexity: O(n*m). Output: The maximum length of a common subsequence.
function longestCommonSubsequence(sequence1, sequence2, sequence3){
  const matrix = Array.from({length: sequence1.length + 1}, (_, rowIndex) => Array.from({length: sequence2.length + 1}, (_, colIndex) => Array.from({length: sequence3.length + 1}, (_, depthIndex) => {
    if (colIndex === 0 || rowIndex === 0 || depthIndex === 0) return 0
    return 0
  })))
  for (let k = 1; k <= sequence3.length; k++) {
    for (let j = 1; j <= sequence2.length; j++) {
      for (let i = 1; i <= sequence1.length; i++) {
        if (sequence1[i - 1] === sequence2[j - 1] && sequence2[j - 1] === sequence3[k - 1]) {
          const match = matrix[i - 1][j - 1][k - 1] + 1
          matrix[i][j][k] = match
        } else {
          // If there's no match, consider all possible previous states
          const fromI = matrix[i - 1][j][k];
          const fromJ = matrix[i][j - 1][k];
          const fromK = matrix[i][j][k - 1];
          const fromIJ = matrix[i - 1][j - 1][k];
          const fromIK = matrix[i - 1][j][k - 1];
          const fromJK = matrix[i][j - 1][k - 1];
          // Take the maximum value among these possibilities
          matrix[i][j][k] = Math.max(
            fromI,
            fromJ,
            fromK,
            fromIJ,
            fromIK,
            fromJK
          );
        }
      }
    }
  }
  //console.table(matrix)
  return matrix[sequence1.length][sequence2.length][sequence3.length]
}

module.exports = longestCommonSubsequence