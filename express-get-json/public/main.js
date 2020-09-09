/* global $ */
$.ajax({
  url: '/api/grades',
  method: 'GET',
  success: data => {
    /* eslint-disable no-console */
    console.log(data);
  },
  error: err => {
    /* eslint-disable no-console */
    console.error(err);
  }
});
