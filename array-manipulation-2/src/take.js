/* eslint-disable no-unused-vars */
function take(arr, count) {
  const short = [];
  for (let i = 0; i < Math.min(count, arr.length); i++) {
    short.push(arr[i]);
  }
  return short;
}
