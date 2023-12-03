import { emailRegister, nameRegister, passwordRegister } from "../../elements.js"

export const getRegisterInputValues = () => {
    const name = nameRegister.value
    const email = emailRegister.value
    const password = passwordRegister.value

    return {name, email, password}
}