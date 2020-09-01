/* eslint-disable no-unused-vars */
function pick(src, keys) {
  const picked = {};
  for (const prop in src) {
    if (keys.includes(prop) && src[prop] !== undefined) { picked[prop] = src[prop]; }
  }
  return picked;
}
