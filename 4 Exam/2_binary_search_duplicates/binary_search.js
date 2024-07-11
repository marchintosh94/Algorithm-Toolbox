// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', line => {
    rl.once('line', line => {
        const arr = line.toString().split(' ').map(Number);
        rl.once("line", (line) => {
            rl.once('line', line => {
                const keys = line.toString().split(' ').map(Number);
                const result = [];
        
                for (let key of keys) {
                    result.push(binarySearch(arr, key));
                }
        
                const res = result.join(' ');
                const maxLength = 50000;
        
                for (let i = 0; i < res.length; i += maxLength) {
                    process.stdout.write(res.slice(i, i + maxLength));
                }
        
                process.stdout.write('\n');
                process.exit();
            })
        });
    });
})

// find the first occurrence of the key in the array
function binarySearch(arr = [], key) {
    // write your code here
    let low = 0;
    let high = arr.length - 1;
    let result = -1;
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] === key) {
            result = mid;
            high = mid - 1;
        } else if (key < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;
}

module.exports = binarySearch;
