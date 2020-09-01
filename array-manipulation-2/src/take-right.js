/* eslint-disable no-unused-vars */
function takeRight(arr, count) {
  const output = [];
  for (let i = Math.max(arr.length - count, 0); i < arr.length; i++) {
    output.push(arr[i]);
  }
  return output;
}
