import { emailRegister } from "../../../elements.js"
import { userAlreadyExistsAlert } from "../../../helperFunctions/alerts/userAlreadyExistsAlert.js"

export const validateRegisterForm = () => {
    emailRegister.classList.add('is-invalid')
    emailRegister.onchange = () => { emailRegister.classList.remove('is-invalid') }
    userAlreadyExistsAlert()
}