// form.js

// Retrieve the form element
const form = document.querySelector('form');

// Add an event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Perform any additional validation or processing here
  // ...

  // Submit the form via AJAX or fetch
  fetch(form.action, {
    method: form.method,
    body: new FormData(form)
  })
    .then((response) => {
      if (response.ok) {
        // Handle a successful form submission
        console.log('Form submitted successfully!');
      } else {
        // Handle an unsuccessful form submission
        console.error('Form submission failed.');
      }
    })
    .catch((error) => {
      console.error('An error occurred during form submission:', error);
    });
});