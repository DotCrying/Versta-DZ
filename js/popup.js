const loginButton = document.querySelector('.login-button');
const loginPopUp = document.querySelector('.login-popup');
loginButton.addEventListener('click', showPopUp);
function showPopUp(event) {
    event.preventDefault();
    loginPopUp.classList.toggle('show-popup');
};