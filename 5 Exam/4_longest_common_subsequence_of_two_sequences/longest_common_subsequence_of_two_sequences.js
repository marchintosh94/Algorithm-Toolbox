const rl = require('readline').createInterface({
  input: process.stdin,
  terminal: false
})
process.stdin.setEncoding('utf8')

rl.once('line', line => {
  const n = parseInt(line.toString())
  rl.once('line', line => {
    const sequence1 = line.toString().split(' ').map(Number)
    rl.once('line', line => {
      const m = parseInt(line.toString())
      rl.once('line', line => {
        const sequence2 = line.toString().split(' ').map(Number)
        const result = longestCommonSubsequence(sequence1, sequence2)
        console.log(result)
        process.exit()
      })
    })
  })
})



// Longest Common Subsequence of Two Sequences
// Given two sequences, find the length of the longest subsequence present in both of them.
// Time complexity: O(n*m). Output: The maximum length of a common subsequence.
function longestCommonSubsequence(sequence1, sequence2){
  const matrix = Array.from({length: sequence1.length + 1}, (_, rowIndex) => Array.from({length: sequence2.length + 1}, (_, colIndex) => {
    if (colIndex === 0 || rowIndex === 0) return 0
    return 0
  }))
  for (let j = 1; j <= sequence2.length; j++) {
    for (let i = 1; i <= sequence1.length; i++) {
      const insertion = matrix[i][j - 1]
      const deletion = matrix[i - 1][j]
      const match = matrix[i - 1][j - 1] + 1
      const mismatch = matrix[i - 1][j - 1]
      if (sequence1[i - 1] === sequence2[j - 1]) {
        matrix[i][j] = Math.max(insertion, deletion, match)
      } else {
        matrix[i][j] = Math.max(insertion, deletion, mismatch)
      }
    }
  }
  //console.table(matrix)
  return matrix[sequence1.length][sequence2.length]
}

module.exports = longestCommonSubsequence