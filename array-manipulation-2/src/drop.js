/* eslint-disable no-unused-vars */
function drop(arr, count) {
  const dropped = [];
  for (let i = Math.max(count, 0); i < arr.length; i++) {
    dropped.push(arr[i]);
  }
  return dropped;
}
