// Description: Givent the string, check if it is a palindrome
// Link: https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ

// Example
// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.

function checkPalindrome(inputString) {
  let j = inputString.length - 1;
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] !== inputString[j]) {
      return false;
    }
    j--;
  }
  return true;
}
