import { beginDateInput, beginTimeInput, finishDateInput, finishTimeInput } from "../../elements.js"
import { fixDateAlert } from "../alerts/fixDate.js"

export const validateTaskDate = () => {
    beginDateInput.classList.add('is-invalid')
    finishDateInput.classList.add('is-invalid')
    beginTimeInput.classList.add('is-invalid')
    finishTimeInput.classList.add('is-invalid')
    fixDateAlert()
}