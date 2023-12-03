import { currUser, loadUserInfo } from "../crud/store.js";
import { loginForm, registerForm } from "../elements.js";
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
