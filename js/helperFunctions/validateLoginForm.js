import { emailLogin, passwordLogin } from "../elements.js"
import { invalidCredentialsAlert } from "./invalidCredentialsAlert.js"

export const validateLoginForm = () => {
    emailLogin.classList.add('is-invalid')
    passwordLogin.classList.add('is-invalid')
    emailLogin.onchange = () => { emailLogin.classList.remove('is-invalid') }
    passwordLogin.onchange = () => { passwordLogin.classList.remove('is-invalid') }
    invalidCredentialsAlert()
}