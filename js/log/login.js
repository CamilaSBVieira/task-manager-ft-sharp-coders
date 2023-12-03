import { validateLoginForm } from './helperFunction/form/validateLoginForm.js'
import { getLoginInputValues } from './helperFunction/form/getLoginInputValues.js'
import { hashPassword } from './helperFunction/createUser/hashPassword.js'
import { createSession, users } from './store.js'

export const login = async (e) => {
    e.preventDefault()

    let { email, password } = getLoginInputValues()

    const passwordHash = await hashPassword(password)

    const validate = users.findIndex(u => u.email == email && u.password == passwordHash)

    if (validate < 0) {
        validateLoginForm()
    } else {
        createSession(validate)
        window.location.replace('./tasks.html')
    }
}