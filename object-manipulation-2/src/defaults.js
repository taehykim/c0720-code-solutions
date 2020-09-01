/* eslint-disable no-unused-vars */
function defaults(target, src) {
  for (const prop in src) {
    if (!Object.keys(target).includes(prop)) target[prop] = src[prop];
  }
}
