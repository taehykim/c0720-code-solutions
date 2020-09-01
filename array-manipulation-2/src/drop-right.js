/* eslint-disable no-unused-vars */
function dropRight(arr, count) {
  const dropped = [];
  for (let i = 0; i < arr.length - count; i++) {
    dropped.push(arr[i]);
  }
  return dropped;
}
