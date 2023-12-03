import { emailRegister, nameRegister, passwordRegister } from '../elements.js'
import { generateId } from './helperFunction/generateId.js'
import { hashPassword } from './helperFunction/hashPassword.js'
import { create, users } from './store.js'
import { alert } from '../helperFunctions/alert.js'

export const register = async (e) => {
    e.preventDefault()
    const name = nameRegister.value
    const email = emailRegister.value
    const password = passwordRegister.value

    const passwordHash = await hashPassword(password)

    const validate = users.findIndex(u => u.email == email)
    if (validate >= 0) {
        emailRegister.classList.add('is-invalid')
        emailRegister.onchange = () => { emailRegister.classList.remove('is-invalid') }
        alert('E-mail já cadastrado, utilize outro e-mail ou faça login na sua conta já existente.', 'error')
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