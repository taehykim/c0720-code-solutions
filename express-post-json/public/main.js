/* global $ */
const tbody = document.querySelector('tbody');
const form = document.querySelector('form');

const handleSubmit = event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const course = formData.get('course');
  const grade = formData.get('grade');
  const data = { name: name, course: course, grade: grade };

  $.ajax({
    url: '/api/grades',
    method: 'POST',
    data: JSON.stringify(data),
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      /* eslint-disable no-console */
      const tr = document.createElement('tr');
      const nameTd = document.createElement('td');
      const courseTd = document.createElement('td');
      const gradeTd = document.createElement('td');

      nameTd.textContent = data.name;
      courseTd.textContent = data.course;
      gradeTd.textContent = data.grade;
      tr.append(nameTd, courseTd, gradeTd);
      tbody.appendChild(tr);

      form.reset();
    },
    error: function (err) {
      /* eslint-disable no-console */
      console.error(err);
    }
  });
};

form.addEventListener('submit', handleSubmit);
