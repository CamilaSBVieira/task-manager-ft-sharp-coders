import { alert } from "./alert.js"

export const userAlreadyExistsAlert = () => {
    alert('E-mail já cadastrado, utilize outro e-mail ou faça login na sua conta já existente.', 'danger')
}