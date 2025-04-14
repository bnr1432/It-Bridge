function validateForm() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "") {
        alert("Username cannot be empty");
        return false;
    }

    if (password === "") {
        alert("Password cannot be empty");
        return false;
    }

    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!usernameRegex.test(username)) {
        alert("Username must be 3-15 characters and contain only letters, numbers, and underscores.");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long, include uppercase, lowercase, and a number.");
        return false;
    }

    alert("Login successful");
    return true;
}
