/* Add your JavaScript to this file */
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = document.querySelector('input[type="email"]');
    const messageDiv = document.querySelector('.message');
    if (emailInput.value) {
      messageDiv.textContent = `Thank you! Your email address ${emailInput.value} has been added to our mailing list!`;
    } else {
      messageDiv.textContent = "Please enter a valid email address.";
    }
  });
  