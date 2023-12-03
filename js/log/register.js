import { generateId } from './helperFunction/createUser/generateId.js'
import { hashPassword } from './helperFunction/createUser/hashPassword.js'
import { create, users } from './store.js'
import { validateRegisterForm } from './helperFunction/form/validateRegisterForm.js'
import { getRegisterInputValues } from './helperFunction/form/getRegisterInputValues.js'

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