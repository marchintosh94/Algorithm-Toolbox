const pointsCover = require("./points_and_segment")

console.log(pointsCover([], [])) // Expected output: ""
console.log("===") 
console.log(pointsCover([[1, 5]], [3])) // Expected output: "1"
console.log("==="); 
console.log(pointsCover([[1, 5]], [6])) // Expected output: "0"
console.log("===");
console.log(pointsCover([[1, 5], [2, 6], [3, 4]], [2, 3, 6, 7])) // Expected output: "2 3 1 0"
console.log("===")
console.log(pointsCover([[1, 5], [3, 7]], [2, 4, 6])) // Expected output: "1 2 1"
console.log("===")
console.log(pointsCover([[1, 1], [2, 2]], [1, 2])) // Expected output: "1 1"
console.log("===")
console.log(pointsCover([[1, 1000000]], [500000])) // Expected output: "1"
console.log("===")
console.log(pointsCover([[-100000000, 100000000]], [-100000000])) // Expected output: "1"
console.log("===")
console.log(pointsCover([[-100000000, 100000000]], [100000000])) // Expected output: "1"
console.log("===")
console.log(pointsCover([[-100000000, 100000000]], [0])) // Expected output: "1"
console.log("===")
console.log(pointsCover([[-100000000, 100000000]], [100000001])) // Expected output: "0"
console.log("===")
console.log(pointsCover([[-100000000, 100000000]], [100000000, -100000000])) // Expected output: "1 1"
console.log("===")
console.log(pointsCover([[-100000000, 0], [0, 100000000]], [-100000000, 0, 100000000])) // Expected output: "1 2 1"
console.log("===")
console.log(pointsCover([[-100000000, 0], [-50000000, 50000000], [0, 100000000]], [-100000000, 0, 100000000])) // Expected output: "1 3 1"
console.log("===");
process.exit()