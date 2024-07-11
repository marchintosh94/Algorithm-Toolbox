//Change money to the least number of bills/coins
const changeMoney = (money, denomination) => {
  const result = [];
  const _denomination = denomination.sort((a, b) => b - a);
  let i = 0;
  while (money > 0) {
    if (money >= _denomination[i]) {
      result.push(denomination[i]);
      money -= _denomination[i];
    } else {
      i++;
    }
  }
  return result;
}

// Test cases
console.log(changeMoney(8, [1, 4, 6]).length);