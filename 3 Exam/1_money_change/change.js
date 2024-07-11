const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");

rl.once("line", (line) => {
  const money = Number(line.toString());
  const denomination = [1, 5, 10];
  console.log(change(money, denomination));
  process.exit();  
});


const change = (money, denomination) => {
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
  return result.length;
};

module.exports = change;
