// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

const isAnagram = (test, original) => {
  if (test.length !== original.length) {
    return false;
  } else {
    const testToLowerCase = test.toLowerCase();
    const originalToLowerCase = original.toLowerCase();
    let testArr = testToLowerCase.split("");

    for (let j = 0; j < originalToLowerCase.length; j++) {
      for (let i = 0; i < test.length; i++) {
        if (testArr[i] === originalToLowerCase[j]) {
          testArr.splice([i], 1);
        }
      }
    }
    if (testArr.length === 0) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(isAnagram("apple", "pale"));
