/* eslint-disable no-unused-vars */
function flatten(arr) {
  const flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flatArr.push(arr[i][j]);
      }
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
}
