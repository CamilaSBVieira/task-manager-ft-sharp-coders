import { currUser, loadUserInfo } from "../crud/store.js";
import { loginButton, loginForm, registerButton, registerForm } from "../elements.js";
import { alreadyLoggedAlert } from "../helperFunctions/alerts/alreadyLoggedAlert.js";
import { login } from "./login.js";
import { register } from "./register.js";

loadUserInfo()
if (currUser) {
    alreadyLoggedAlert()
    setTimeout(() => {
        window.location = './tasks.html'
    }, 1500);
}

loginForm.onsubmit = login
registerForm.onsubmit = register

loginForm.addEventListener('focusin', () => {
    registerButton.disabled = true
})
loginForm.addEventListener('focusin', () => {
    loginButton.disabled = false
})
registerForm.addEventListener('focusin', () => {
    loginButton.disabled = true
})
registerForm.addEventListener('focusin', () => {
    registerButton.disabled = false
})