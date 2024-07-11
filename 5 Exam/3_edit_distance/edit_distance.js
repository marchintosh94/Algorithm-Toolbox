const rl = require('readline').createInterface({
  input: process.stdin,
  terminal: false
})
process.stdin.setEncoding('utf8')


rl.once('line', line => {
  const string1 = line.toString().trim()
  rl.once('line', line => {
    const string2 = line.toString().trim()
    const result = editDistance(string1, string2)
    console.log(result)
    process.exit()
  })
})

function editDistance(string1, string2){
  const matrix = Array.from({length: string1.length + 1}, (_, rowIndex) => Array.from({length: string2.length + 1}, (_, colIndex) => {
    if (colIndex === 0) return rowIndex
    if (rowIndex === 0) return colIndex
    return 0
  }))
  for (let j = 1; j <= string2.length; j++) {
    for (let i = 1; i <= string1.length; i++) {
      const insertion = matrix[i][j - 1] + 1
      const deletion = matrix[i - 1][j] + 1
      const match = matrix[i - 1][j - 1]
      const mismatch = matrix[i - 1][j - 1] + 1
      if (string1[i - 1] === string2[j - 1]) {
        matrix[i][j] = Math.min(insertion, deletion, match)
      } else {
        matrix[i][j] = Math.min(insertion, deletion, mismatch)
      }
    }
  }
  //console.table(matrix)
  return matrix[string1.length][string2.length]
}

module.exports = editDistance