let registeredNames = [];

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    clearErrors();

    let isValid = true;

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate Name
    if (!name) {
        showError('nameError', 'Name is required.');
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate Password
    if (password.length < 8) {
        showError('passwordError', 'Password must be at least 8 characters long.');
        isValid = false;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        alert('Registration successful!');
        registeredNames.push(name);
        displayRegisteredUsers();
        document.getElementById('registrationForm').reset(); // Reset form fields
    }
});

// Function to display error messages
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

// Function to clear previous error messages
function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(el => el.textContent = '');
}

// Function to display registered users
function displayRegisteredUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear the list

    registeredNames.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        userList.appendChild(li);
    });
}
