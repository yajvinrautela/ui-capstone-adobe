var input = document.getElementById("pass");

input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("log").click();
        }
    });


function validatePassword() {
    const password = document.getElementById('pass').value;
    const message = document.getElementById('message');

    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
        message.textContent = 'Password must be at least 8 characters long.';
    } else if (!hasUpperCase) {
        message.textContent = 'Password must contain at least one uppercase letter.';
    } else if (!hasLowerCase) {
        message.textContent = 'Password must contain at least one lowercase letter.';
    } else if (!hasNumbers) {
        message.textContent = 'Password must contain at least one number.';
    } else if (!hasSpecialChars) {
        message.textContent = 'Password must contain at least one special character.';
    } else {
        message.textContent = 'Password is valid!';
        window.location.href = 'learn1.html';
    }
}