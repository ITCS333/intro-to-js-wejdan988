function sum(a, b) {
  return a + b;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function findLargest(numbers) {
  if (numbers.length === 0) return null;

  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

function isPalindrome(str) {
  let lower = str.toLowerCase();
  let reversed = lower.split("").reverse().join("");
  return lower === reversed;
}

function filterEvenNumbers(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}


// Do not edit the line below.
module.exports = {
  sum,
  reverseString,
  findLargest,
  isPalindrome,
  filterEvenNumbers,
};

