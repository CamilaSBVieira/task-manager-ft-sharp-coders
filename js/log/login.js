import { validateLoginForm } from '../helperFunctions/validateLoginForm.js'
import { getLoginInputValues } from './helperFunction/getLoginInputValues.js'
import { hashPassword } from './helperFunction/hashPassword.js'
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