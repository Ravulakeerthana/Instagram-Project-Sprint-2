function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform login authentication (you can add your logic here)
    if (username === 'your_username' && password === 'your_password') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function loginWithFacebook() {
    // Implement Facebook login functionality
    alert('Login with Facebook clicked');
}

function forgotPassword() {
    // Implement forgot password functionality
    alert('Forgot Password clicked');
}

function showSignup() {
    // Implement logic to navigate to the signup page
    alert('Sign Up clicked');
}
