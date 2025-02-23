// Cart Logic
document.querySelectorAll('.btn-remove').forEach(button => {
  button.addEventListener('click', function () {
    const cartItem = this.closest('.cart-item');
    cartItem.remove();
  });
});