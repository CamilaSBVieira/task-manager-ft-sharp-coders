import { beginDateInput, beginTimeInput, descriptionInput, finishDateInput, finishTimeInput, nameInput } from "../elements.js"
import { alert } from "./alert.js"
import { getInputValues } from "./getInputValues.js"

export const validateCreateTaskForm = () => {
    let { name, beginDate, finishDate, beginTime, finishTime, description} = getInputValues()
    !name && nameInput.classList.add('is-invalid')
    !beginDate && beginDateInput.classList.add('is-invalid')
    !finishDate && finishDateInput.classList.add('is-invalid')
    !beginTime && beginTimeInput.classList.add('is-invalid')
    !finishTime && finishTimeInput.classList.add('is-invalid')
    !description && descriptionInput.classList.add('is-invalid')
    alert('Preencha todos os campos!', 'error')
}