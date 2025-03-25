const logInForm = document.querySelector('#login_form');

function loginUser(event) {
    event.preventDefault();

    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    const users = localStorage.getItem('users');
    if (!users) {
        alert('This email hasn\'t been registered yet');
        return;
    }
    const userList = JSON.parse(users);
    const match = userList.find(user => user.email === email.value);
    if (!match) {
        alert('This email hasn\'t been registered yet');
        return;
    }
    if (match.password !== password.value) {
        alert('Wrong password please try again');
        return;
    }
    sessionStorage.setItem('user', JSON.stringify(match));
    window.open('../pages/index.html', '_self');
}

document.addEventListener(
    'DOMContentLoaded',
    () => logInForm.addEventListener('submit', loginUser)
);