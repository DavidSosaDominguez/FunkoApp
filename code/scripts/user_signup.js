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
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if(users.some(user => user.name === newUser.name)) {
        alert("User already exists");
        return;
    }
    users.push(newUser);
    const stringUser = JSON.stringify(newUser);
    localStorage.setItem('users', stringUser);
    sessionStorage.setItem('user', stringUser);

    window.location.href = "index.html";    
}



signUpForm.addEventListener('submit', registerUser);

