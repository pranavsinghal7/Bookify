document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        const user = {
            username: username,
            email: email,
            password: password
        };

        localStorage.setItem('user', JSON.stringify(user));

        alert("Registration successful!");

        document.getElementById('registration-form').reset();
    } else {
       
        alert("Please fill in all fields correctly."); 
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    
    const storedUser = JSON.parse(localStorage.getItem('user'));

    
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        
        alert("Login successful!"); 
        
        window.location.href = 'index.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});
