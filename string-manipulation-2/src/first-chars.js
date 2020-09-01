/* eslint-disable no-unused-vars */
function firstChars(len, str) {
  let truncated = '';
  for (let i = 0; i < Math.min(len, str.length); i++) {
    truncated += str[i];
  }
  return truncated;
}
