document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('employeeForm').addEventListener('submit', function (event) {
      event.preventDefault();

      let name = document.getElementById('name').value;
      let employeeId = document.getElementById('employeeId').value;
      let department = document.getElementById('department').value;
      let experience = parseInt(document.getElementById('experience').value);
      let email = document.getElementById('email').value;
      let mobileNumber = document.getElementById('mobileNumber').value;

      let role;
      if (experience > 5) {
          role = 'Senior';
      } else if (experience >= 2 && experience <= 5) {
          role = 'Junior';
      } else {
          role = 'Fresher';
      }

      let newRow = document.createElement('tr');
      let cells = [
          document.createElement('td'),
          document.createElement('td'),
          document.createElement('td'),
          document.createElement('td'),
          document.createElement('td'),
          document.createElement('td'),
          document.createElement('td'),
          document.createElement('td'),
      ];

      cells[0].innerText = name;
      cells[1].innerText = employeeId;
      cells[2].innerText = department;
      cells[3].innerText = experience;
      cells[4].innerText = email;
      cells[5].innerText = mobileNumber;
      cells[6].innerText = role;

      let deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', function () {
          newRow.remove();
      });

      cells[7].appendChild(deleteButton);

      cells.forEach((cell) => {
          newRow.appendChild(cell);
      });

      document.getElementById('employeeTableBody').appendChild(newRow);

      document.getElementById('employeeForm').reset();
  });
});