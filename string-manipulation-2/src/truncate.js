/* eslint-disable no-unused-vars */
function truncate(len, str) {
  if (!str) return '...';
  let truncated = '';
  for (let i = 0; i < Math.min(len, str.length); i++) {
    truncated += str[i];
  }
  return truncated + '...';
}
