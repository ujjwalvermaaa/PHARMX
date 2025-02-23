// Reminders Logic
document.getElementById('reminderForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const medicineName = document.getElementById('medicineName').value;
  const reminderTime = document.getElementById('reminderTime').value;

  if (medicineName && reminderTime) {
    const reminderList = document.getElementById('reminderList');
    const reminderItem = document.createElement('div');
    reminderItem.className = 'reminder-item';
    reminderItem.innerHTML = `
      <p><strong>${medicineName}</strong> at ${reminderTime}</p>
      <button class="btn-delete">Delete</button>
    `;
    reminderList.appendChild(reminderItem);

    // Clear form
    document.getElementById('medicineName').value = '';
    document.getElementById('reminderTime').value = '';

    // Add delete functionality
    reminderItem.querySelector('.btn-delete').addEventListener('click', function () {
      reminderList.removeChild(reminderItem);
    });
  }
});