
/**
 * ! 1. Get Vowel Count
 * In this workshop, you will build a sentence analyzer that will take a sentence and get the count for the number of words, vowels, consonants, and punctuation marks.

To begin, create a getVowelCount function with a parameter called sentence. Your function should return the total number of vowels in a sentence.
 */
function getVowelCount(sentence){
const vowels="aeiou";
const letterLower=sentence.toLowerCase();
let count=0;
for(let char of letterLower){
  if(vowels.includes(char)){
    count++;
  }
  
}
return count;
}
const vowelCount=getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

/**
 * ? another way
 */

// function getVowelCount(sentence){
// const vowel="aeiou";
// let totalVowelCount=[];
// const toUpper=sentence.toLowerCase();
// for(const word of toUpper){
//   if(vowel.includes(word)){
//     totalVowelCount.push(word)
//   }
// }
// return totalVowelCount.length;

// }
// const result1=getVowelCount("My name is Wahidul");
// console.log(result1)
/***
 * ! 2. Get Consonant Count
 * It's time to count the consonants. Create a getConsonantCount function with a sentence parameter.

Inside the function, use a loop to count the number of consonants in the sentence that will be passed into the function when it is called. A consonant is any letter that is not one of the following characters: "aeiou".

Your getConsonantCount function must return a number.
 */
function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}
const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);


/**
 * ! 3. Get Punctuation Count
 * You should count the number of punctuations now.

Create a getPunctuationCount function with a sentence parameter.

Inside the function, create a loop to count the number of punctuation characters in the sentence that will be passed into the function when it is called. For our purposes, a punctuation character is any character that is not a space (" ") or a letter.

Your getPunctuationCount function must return a number.
 */

function getPunctuationCount(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);



/***
 * ! 4. Get Word Count
 * Finally, count the number of words by creating a getWordCount function with a sentence parameter. The function should return the total number of words in the sentence passed in when it is called.
 */
function getWordCount(sentence) {
  if (sentence.trim() === '') {
    return 0;
  }
  
  const words = sentence.trim().split(/\s+/);
  return words.length;
}

const wordCount=getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);