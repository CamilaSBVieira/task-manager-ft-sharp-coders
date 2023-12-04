import { alert } from "./alert.js"

export const fixDateAlert = () => {
    alert('Data e hora de início não podem ser maiores que data e hora de término!', 'danger')
}