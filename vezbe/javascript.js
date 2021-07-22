// alert('hello from js')

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('.form');

console.log(email);

// da se ne refresuje stranica
form.onsubmit = function(e) {
    e.preventDefault();
    console.log(email.value);
}