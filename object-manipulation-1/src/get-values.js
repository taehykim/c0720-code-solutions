/* eslint-disable no-unused-vars */
function getValues(obj) {
  const vals = [];
  for (const prop in obj) {
    vals.push(obj[prop]);
  }
  return vals;
}
