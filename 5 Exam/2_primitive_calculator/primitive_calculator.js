const rl = require('readline').createInterface({
  input: process.stdin,
  terminal: false
})
process.stdin.setEncoding('utf8')

rl.once('line', line => {
  const number = parseInt(line)
  const  availableOperations = [
    {operator: '+', number: 1}, 
    {operator: '*', number: 2}, 
    {operator: '*', number: 3}
  ]
  const result = primitiveCalculator(number, availableOperations)
  console.log(result.length)
  console.log(result.values.join(' '))
  process.exit()
})

function primitiveCalculator(number){
  if (number === 1){
    return {length: 0, values: [1]}
  }
  const listA = Array.from({length: number + 1}, () => 0)
  const listB = Array.from({length: number + 1}, () => 0)

  for (let i = 2; i <= number; i++){
    // 3
    listA[i] = listA[i - 1] + 1 //2
    listB[i] = i - 1 // 2
    if (i % 2 === 0 && listA[i] > listA[i / 2] + 1){
      listA[i] = listA[i / 2] + 1
      listB[i] = i / 2
    }
    if (i % 3 === 0 && listA[i] > listA[i / 3] + 1){
      listA[i] = listA[i / 3] + 1
      listB[i] = i / 3
    }
  }
  console.table(listA.slice(0, 20))
  console.table(listB.slice(0, 20))
  const result = []
  for (let i = number; i !== 0; i = listB[i]){
    result.push(i)
  }
  return {length: result.length - 1, values: result.reverse()}
}

module.exports = primitiveCalculator