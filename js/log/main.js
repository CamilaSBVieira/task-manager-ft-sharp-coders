import { loginForm, registerForm } from "../elements.js";
import { login } from "./login.js";
import { register } from "./register.js";

loginForm.onsubmit = login
registerForm.onsubmit = register
