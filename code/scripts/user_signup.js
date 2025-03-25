function User(name, surname, email, password) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
}

const signUpForm = document.querySelector('#signup_form');

function registerUser(event) {
    event.preventDefault();
    const newUser = new User(
        document.querySelector('#name').value,
        document.querySelector('#surname').value,
        document.querySelector('#email').value,
        document.querySelector('#password').value
    );

    const stringUser = JSON.stringify(newUser);

    const users = localStorage.getItem('users');
    if(!users) {
        localStorage.setItem('users', '[' + stringUser + ']');
        window.open('../pages/index.html', '_self');
        return;
    }else {
        const userList = JSON.parse(users);
        //Check that user isn't already registered
        if(userList.some(user => user.email === newUser.email)) {
            alert('A user with given email already exists');
            return;
        }
        userList.push(newUser);
        localStorage.setItem('users', JSON.stringify(userList));
    }

    sessionStorage.setItem('user', stringUser);

    window.open('../pages/index.html', '_self');
}


document.addEventListener(
    'DOMContentLoaded',
    () => signUpForm.addEventListener('submit', registerUser)
);
