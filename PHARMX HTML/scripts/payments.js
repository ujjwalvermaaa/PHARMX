// Payments Logic
document.getElementById('paymentForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const cardNumber = document.getElementById('cardNumber').value;
  const expiryDate = document.getElementById('expiryDate').value;
  const cvv = document.getElementById('cvv').value;

  // Perform payment logic here
  console.log('Payment:', cardNumber, expiryDate, cvv);
});