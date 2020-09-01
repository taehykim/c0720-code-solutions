/* eslint-disable no-unused-vars */
function isPalindromic(str) {
  const regex = /[^a-z]/gi;
  const onlyLetterStr = str.replace(regex, '');

  let tracingIndex = onlyLetterStr.length - 1;
  for (let i = 0; i < onlyLetterStr.length; i++) {
    if (onlyLetterStr[i] !== onlyLetterStr[tracingIndex]) return false;
    tracingIndex--;
  }
  return true;
}
