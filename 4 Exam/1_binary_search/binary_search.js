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
                    result.push(binarySearch(arr, key)());
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
});


const  binarySearch = (arr = [], key) => (low = 0, high = arr.length - 1) => {
    // write your code here
    if (low > high) {
        return -1;
    }
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === key) {
        return mid;
    }
    return key < arr[mid]
        ? binarySearch(arr, key)(low, mid - 1)
        : binarySearch(arr, key)(mid + 1, high);
}


module.exports = binarySearch;
