/* eslint-disable no-unused-vars */
function zip(first, second) {
  const minLen = Math.min(first.length, second.length);
  const zippedArr = [];
  for (let i = 0; i < minLen; i++) {
    zippedArr.push([first[i], second[i]]);
  }
  return zippedArr;
}
