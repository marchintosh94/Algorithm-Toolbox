/**
  Maximizing the Value of the Loot Problem
  Find the maximal value of items that fit into the
  backpack.
  Input: The capacity of a back-
  pack W as well as the weights
  (w1,...,wn) and costs (c1,...,cn) of
  n different compounds.
  Output: The maximum total value
  of items that fit into the backpack
  of the given capacity
 */

const mapAndSortLoop = (acc, weight, index) => {
    const ratio = values[index] / weight;
    const value = { weight, value: values[index], ratio }
    if (ratio > acc[index - 1]?.ratio) {
      return [value, ...acc];
    }  
    return [...acc, value];
  }
  
const maximimizingLoot = (capacity, items) => {
  if (capacity === 0){
    return 0
  } 
  const expensiveItem = items[0]
  const amount = Math.min(capacity, expensiveItem.weight)
  const value = amount * expensiveItem.ratio
  return value + maximimizingLoot(capacity - amount, items.slice(1))
}

const maximumValue = (capacity, weigths, values) => {
  const items = weigths.reduce(mapAndSortLoop, [])
  return maximimizingLoot(capacity, items)
}

// Test cases
const weigths = [5, 4, 3]
const values = [30, 28, 24]
console.log(maximumValue(9, weigths, values)) // 64
