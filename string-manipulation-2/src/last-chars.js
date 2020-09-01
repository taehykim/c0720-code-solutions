/* eslint-disable no-unused-vars */
function lastChars(len, str) {
  let truncated = '';
  for (let i = Math.max(str.length - len, 0); i < str.length; i++) {
    truncated += str[i];
  }
  return truncated;
}
