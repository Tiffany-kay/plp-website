// Example of a simple form validation
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    if (name.value.length < 3) {
        alert("Name must be at least 3 characters long.");
        return false;
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address.");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}

document.querySelector('form').addEventListener('submit', validateForm);
