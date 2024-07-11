/**
 * Closest Points Problem:
 * Find the closest pair of points in a set of points on a plane. Input: A list of n points on a plane. Output: The minimum distance between a pair of these points.
 * This computational geometry problem has many applications in computer graphics and vision. 
 * A naive algorithm with quadratic running time iterates through all pairs of points to find the closest pair. 
 * Your goal is to design an O(n log n) time divide and conquer algorithm. 
 * To solve this problem in time O(n log n), let's first split the given n points by an appropriately chosen vertical line into two halves S1 and S2 of size n 2 (assume for simplicity that all x-coordinates of the input points are different). 
 * By making two recursive calls for the sets S1 and S2, we find the minimum distances d1 and d2 in these subsets. Let d = min{d1, d2}. 4.2 Programming Challenges 111 4.2.7 Closest Points Closest Points Problem Find the closest pair of points in a set of points on a plane. 
 * Input: A list of n points on a plane. 
 * Output: The minimum distance between a pair of these points. 
 * This computational geometry problem has many applications in com- puter graphics and vision. A naive algorithm with quadratic running time iterates through all pairs of points to find the closest pair. Your goal is to design an O(n log n) time divide and conquer algorithm. To solve this problem in time O(n log n), let’s first split the given n points by an appropriately chosen vertical line into two halves S1 and S2 of size n 2 (assume for simplicity that all x-coordinates of the input points are dif- ferent). By making two recursive calls for the sets S1 and S2, we find the minimum distances d1 and d2 in these subsets. Let d = min{d1, d2}. d2d1 It remains to check whether there exist points p1 ∈ S1 and p2 ∈ S2 such that the distance between them is smaller than d. We cannot afford to check all possible such pairs since there are n 2 · n 2 = Θ(n2) of them. To check this faster, we first discard all points from S1 and S2 whose x-distance to the middle line is greater than d. Now, let’s sort the points of the strip by their y-coordinates and denote the resulting sorted list by P = [p1, . . . , pk]. It turns out that if |i − j| > 7, then the distance between points pi and pj is greater than d for sure. This results in the following algorithm. We first sort the given n points by their x-coordinates and then split the resulting sorted list into two halves S1 and S2 of size n 2 . By making a recursive call for each of the sets S1 and S2, we find the minimum distances d1 and d2 in them. Let d = min{d1, d2}. However, we are not done yet as we also need to find the minimum distance between points from different sets (i.e, a point from S1 and a point from S2) and check whether it is smaller than d. To perform such a check, we filter the initial point set and keep only those points whose x-distance to the middle line does not exceed d. Afterward, we sort the set of points in the resulting strip by their y-coordinates and scan the resulting list of points. For each point, we compute its distance to the seven subsequent points in this list and compute d′, the minimum distance that we encountered during this scan. Afterward, we return min{d, d′}. The running time of the algorithm satisfies the recurrence relation: T (n) = 2 · T (n /2) + O(n log n) . The O(n log n) term comes from sorting the points in the strip by their y-coordinates at every iteration.
 */

function dist(p1, p2) {
  return Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2);
}


function stripClosest(strip, d) {
  let min = d;
  for (let i = 0; i < strip.length; i++) {
    for (let j = i + 1; j < strip.length && (strip[j][1] - strip[i][1]) < min; j++) {
      min = Math.min(min, dist(strip[i], strip[j]));
    }
  }
  return min;
}

function closestPairRec(points) {
  if (points.length <= 3) {
    return bruteForce(points);
  }

  const mid = Math.floor(points.length / 2);
  const midPoint = points[mid];
  const leftPoints = points.slice(0, mid);
  const rightPoints = points.slice(mid);

  const dLeft = closestPairRec(leftPoints);
  const dRight = closestPairRec(rightPoints);
  const d = Math.min(dLeft, dRight);

  const strip = [];
  for (let i = 0; i < points.length; i++) {
    if (Math.abs(points[i][0] - midPoint[0]) < d) {
      strip.push(points[i]);
    }
  }

  return Math.min(d, stripClosest(strip, d)).toPrecision(4);
}

function bruteForce(points) {
  let min = Infinity;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      min = Math.min(min, dist(points[i], points[j]));
    }
  }
  return min;
}


function closestPair(points) {
  // Sort the array of points according to x coordinate
  points.sort((a, b) => a[0] - b[0]);
  return closestPairRec(points);
}



const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.once("line", (line) => {
  const numberOfPoints = Number(line.toString().trim());
  const lines = [];
  let lineNumber = 0;
  rl.on("line", (line) => {
    lineNumber++;
    if (lineNumber <= numberOfPoints) {
      lines.push(line.toString().split(" ").map(Number));
    } 
    if (lineNumber === numberOfPoints) {
      //console.log(lines);
      console.log(closestPair(lines));
      process.exit();
    }
  });
});

module.exports = closestPair;
