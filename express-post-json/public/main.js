/* global $ */
const tbody = document.querySelector('tbody');

$.ajax({
  url: '/api/grades',
  method: 'GET',
  success: data => {
    for (let i = 0; i < data.length; i++) {
      const tr = document.createElement('tr');
      const nameTd = document.createElement('td');
      const courseTd = document.createElement('td');
      const gradeTd = document.createElement('td');

      nameTd.textContent = data[i].name;
      courseTd.textContent = data[i].course;
      gradeTd.textContent = data[i].grade;
      tr.append(nameTd, courseTd, gradeTd);
      tbody.appendChild(tr);
    }
  },
  error: err => {
    /* eslint-disable no-console */
    console.error(err);
  }
});
