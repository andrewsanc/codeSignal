// Description: Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained
// by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side.
// You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
// Image Link: https://codesignal.s3.amazonaws.com/tasks/shapeArea/img/area.png?_tm=1551538776748

// Example
// For n = 2, the output should be
// shapeArea(n) = 5;
// For n = 3, the output should be
// shapeArea(n) = 13.

function shapeArea(n) {
  const memo = [1, 5];
  for (let i = 2; i < n; i++) {
    let calculate = i * 4 + memo[i - 1];
    memo.push(calculate);
  }
  return memo[n - 1];
}

console.log(shapeArea(4));
