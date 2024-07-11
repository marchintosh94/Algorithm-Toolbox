

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");

rl.once("line", (line) => {
  const [itemsCount, knapsackCapacity] = line.toString().split(" ").map(Number);
  const values = [];
  const weights = [];
  let count = 0;

  rl.on("line", (line) => {
    const [v, w] = readLine(line);
    values.push(v);
    weights.push(w);

    if (++count >= itemsCount) {
      console.log(max(itemsCount, knapsackCapacity, values, weights));
      process.exit();
    }
  });
});

function readLine(line) {
  const v = parseInt(line.toString().split(" ")[0], 10);
  const w = parseInt(line.toString().split(" ")[1], 10);

  return [v, w];
}

// create reducer functions that maps and sorts by ratio
const mapAndSortLoop = (values) => (acc, weight, index) => {
  const ratio = values[index] / weight;
  const value = { weight, ratio };
  if (index === 0) {
    return [value];
  }
  for (let i = 0; i < acc.length; i++) {
    if (ratio > acc[i].ratio) {
      return [...acc.slice(0, i), value, ...acc.slice(i)];
    }
  }
  return [...acc, value];
};

const maximimizingLoot = (capacity, items) => {
  if (capacity <= 0 || items.length === 0) {
    return 0;
  }
  const expensiveItem = items[0];
  const amount = Math.min(capacity, expensiveItem.weight);
  const value = amount * expensiveItem.ratio;
  return value + maximimizingLoot(capacity - amount, items.slice(1));
};

const max = (count, capacity, values, weights) => {
  const items = weights.reduce(mapAndSortLoop(values), []);
  return parseFloat(maximimizingLoot(capacity, items).toFixed(4));
};

module.exports = max;
