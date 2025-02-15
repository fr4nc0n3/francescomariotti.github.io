const correctPassword = "francescopsw";
const pswKey = "password"; //localstorage key

const loginForm = document.getElementById("loginForm");
const content = document.getElementById("content");
const passwordField = document.getElementById("password");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const password = passwordField.value;

    if (isPasswordValid(password)) {
        localStorage.setItem(pswKey, password);

        unlock();
    } else {
        alert("Password errata. Riprova.");
    }
});

window.onload = function () {
    const storedPassword = localStorage.getItem(pswKey);

    if (isPasswordValid(storedPassword)) {
        unlock();
    }
};

const unlock = () => {
    content.style.display = "block";
    loginForm.style.display = "none";
};

const isPasswordValid = (password) => {
    return password === correctPassword;
};
