import { emailLogin, passwordLogin } from "../../../elements.js"

export const getLoginInputValues = () => {
    const email = emailLogin.value
    const password = passwordLogin.value

    return {email, password}
}