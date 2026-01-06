/**
 * Implement the Chunky Monkey Algorithm
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

Write a function named chunkArrayInGroups that takes an array as first argument and a number as second argument. The function should split the array into smaller arrays of length equal to the second argument and returns them as a two-dimensional array.
 */


function chunkArrayInGroups(arr, size) {
  const result = []; // This will store the chunks

  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size); // slice a chunk of length 'size'
    result.push(chunk);                   // push it to result
  }

  return result;
}
console.log(chunkArrayInGroups([1, 2, 3, 4], 2));
// [[1, 2], [3, 4]]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
// [[0, 1, 2], [3, 4, 5]]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 2));
// [[0, 1], [2, 3], [4, 5], [6]]
