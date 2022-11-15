document.addEventListener('DOMContentLoaded', (e) => {
    const checkUser = localStorage.getItem('user');
    console.log(checkUser);
    e.preventDefault();
})

const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    validation(name, email);
})

function storeToken(name, user) {
    var token = `!#${Math.random(0, 50)}(${name})`

    localStorage.setItem('user', token)
}

function validation(name, email) {
    if (!name || !email) {
        alert('Please fill in the blanks');
    } else {
        const namePattern = /[1-9]/
        const emailPattern = /[@]/
        if (name.match(namePattern)) {
            alert('Name cannot contain a number')
        } else if (!email.match(emailPattern)) {
            alert('Not a valid email')
        } else {
            const user = [];
            const checkUser = localStorage.getItem('user')
            if (checkUser.token && checkUser.user[0].name == name) {
                alert('User Exist, try again')
            } else {
                user.push({ name: name, email: email })
                storeToken(user[0].name, user);
            }
        }
    }
}
