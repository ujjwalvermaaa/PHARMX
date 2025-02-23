// Admin Logic
document.getElementById('adminForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const action = document.getElementById('adminAction').value;
  
    // Perform admin logic here
    console.log('Admin Action:', action);
  });