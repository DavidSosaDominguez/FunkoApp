const logInForm = document.querySelector('#login_form');

function loginUser(event) {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if(users.length === 0) {
        alert('User doesn\'t exist');
        return;
    }
    const match = users.find(user => user.email === document.querySelector('#email').value);
    if(!match) {
        alert('User doesn\'t exist');
        return;
    }
    if(match.password !== document.querySelector('#password').value) {
        alert('Wrong password');
        return;
    }

    sessionStorage.setItem('user', JSON.stringify(match));

    window.location.href = "index.html";
}

logInForm.addEventListener('submit', loginUser);
