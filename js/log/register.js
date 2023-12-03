import { generateId } from './helperFunction/generateId.js'
import { hashPassword } from './helperFunction/hashPassword.js'
import { create, users } from './store.js'
import { validateRegisterForm } from '../helperFunctions/validateRegisterForm.js'
import { getRegisterInputValues } from './helperFunction/getRegisterInputValues.js'

export const register = async (e) => {
    e.preventDefault()

    let { name, email, password } = getRegisterInputValues()

    const passwordHash = await hashPassword(password)

    const validate = users.findIndex(u => u.email == email)
    if (validate >= 0) {
        validateRegisterForm()
    } else {

        const userId = generateId()

        const user = {
            userId,
            name,
            email,
            password: passwordHash,
        }

        create(user)
        window.location.replace('./tasks.html')
    }
}