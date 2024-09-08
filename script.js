// script.js
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    if (name && email && message) {
        // Send the form data to a server or perform some other action
        console.log(`Form submitted: ${name}, ${email}, ${message}`);
        alert('Form submitted successfully!');
    } else {
        alert('Please fill in all fields!');
    }
});