// by marchintosh

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);

    console.log(max(arr));
    process.exit();
}

function max(arr) {
    const {max_1, max_2} = arr.reduce((accumulator, current) => {
        if (current >= accumulator.max_1){
            accumulator.max_2 = accumulator.max_1
            accumulator.max_1 = current
            return accumulator
        }
        if (current >= accumulator.max_2){
            accumulator.max_2 = current
        }
        return accumulator
    }, {max_1: 0, max_2: 0})
    return max_1 * max_2
}

module.exports = max;
