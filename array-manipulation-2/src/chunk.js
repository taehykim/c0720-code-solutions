/* eslint-disable no-unused-vars */
function chunk(arr, size) {
  const chunkArr = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunkInner = [];
    for (let j = i; j < Math.min(i + size, arr.length); j++) {
      chunkInner.push(arr[j]);
    }
    chunkArr.push(chunkInner);
  }
  return chunkArr;
}
