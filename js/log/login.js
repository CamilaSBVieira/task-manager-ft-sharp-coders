import { emailLogin, passwordLogin } from '../elements.js'
import { alert } from '../helperFunctions/alert.js'
import { hashPassword } from './helperFunction/hashPassword.js'
import { users } from './store.js'

export const login = async (e) => {
    e.preventDefault()
    const email = emailLogin.value
    const password = passwordLogin.value

    const passwordHash = await hashPassword(password)

    const validate = users.findIndex(u => u.email == email && u.password == passwordHash)

    if (validate < 0) {
        emailLogin.classList.add('is-invalid')
        passwordLogin.classList.add('is-invalid')
        emailLogin.onchange = () => { emailLogin.classList.remove('is-invalid')}
        passwordLogin.onchange = () => { passwordLogin.classList.remove('is-invalid')}
        alert('Credenciais inválidas', 'error')
    } else {
        const user = users[validate]
        sessionStorage.setItem('user', user.userId)
        window.location.replace('./tasks.html')
    }
}