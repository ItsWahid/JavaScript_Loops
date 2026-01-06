/**
 * 1. Create a function named mutation that takes an array as its argument.
2. mutation should return true if the string in the first element of the array contains all of the letters of the string in the second element of the array, and false otherwise. For example:
         mutation(["hello", "Hello"]), should return true because all of the letters in the second string are present in the first, ignoring case.
    mutation(["hello", "hey"]) should return false because the string hello does not contain a y.
  mutation(["Alien", "line"]), should return true because all of the letters in line are present in Alien.
 */
function mutation(arr) {
  // Convert both strings to lowercase
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();

  // Check each letter of the second string
  for (let char of second) {
    if (!first.includes(char)) {
      return false; // If any letter is missing, return false
    }
  }

  return true; // All letters were found
}
console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["hello", "hey"]));