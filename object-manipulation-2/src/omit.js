/* eslint-disable no-unused-vars */
function omit(src, keys) {
  const omitted = {};
  for (const prop in src) {
    if (!keys.includes(prop)) omitted[prop] = src[prop];
  }
  return omitted;
}
