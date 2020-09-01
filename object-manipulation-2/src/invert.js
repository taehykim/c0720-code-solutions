/* eslint-disable no-unused-vars */
function invert(src) {
  const inverted = {};
  for (const prop in src) {
    inverted[src[prop]] = prop;
  }
  return inverted;
}
