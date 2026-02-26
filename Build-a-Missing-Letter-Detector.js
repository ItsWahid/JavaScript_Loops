/***
 *!Build a Missing Letter Detector
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

1. You should have a function named fearNotLetter.

2. The fearNotLetter function should accept one argument: a string representing a range of letters in alphabetical order which can have one letter missing.

3. The function should find the missing letter in the passed letter range and return it.

4. If all letters are present in the range, the function should return undefined.
 */
function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i + 1) !== str.charCodeAt(i) + 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  return undefined;
}
console.log(fearNotLetter("abce")) // "d"
console.log(fearNotLetter("abc")) //undefined
console.log(fearNotLetter("abdf")) //"c"