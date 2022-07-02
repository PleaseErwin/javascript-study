const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginName = document.querySelector("#username");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function sayHelloUser(username) {
    loginName.innerText = `Hello ${username}`;
    loginName.classList.remove(HIDDEN_CLASSNAME);
}

function handleLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    sayHelloUser(username);
}

const localStorageUsername = localStorage.getItem(USERNAME_KEY);
if (localStorageUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginSubmit);
} else {
    sayHelloUser(localStorageUsername);
}