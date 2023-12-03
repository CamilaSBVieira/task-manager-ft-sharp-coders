import { beginDateInput, beginTimeInput, descriptionInput, finishDateInput, finishTimeInput, nameInput } from '../elements.js'
import { alert } from '../helperFunctions/alert.js'
import { reloadWindow } from '../helperFunctions/reload.js'
import { check, update } from "./store.js"

export const checkTask = () => {

    let name = nameInput.value
    let beginDate = beginDateInput.value
    let finishDate = finishDateInput.value
    let beginTime = beginTimeInput.value
    let finishTime = finishTimeInput.value
    let description = descriptionInput.value

    if (!name || !beginDate || !finishDate || !beginTime || !finishTime || !description) {
        !name && nameInput.classList.add('is-invalid')
        !beginDate && beginDateInput.classList.add('is-invalid')
        !finishDate && finishDateInput.classList.add('is-invalid')
        !beginTime && beginTimeInput.classList.add('is-invalid')
        !finishTime && finishTimeInput.classList.add('is-invalid')
        !description && descriptionInput.classList.add('is-invalid')
        alert('Preencha todos os campos!', 'error')
    } else {
        let status = 'feita'
        const task = {
            name,
            beginDate,
            finishDate,
            beginTime,
            finishTime,
            description,
            status
        }
        update(task)
        alert('Tarefa feita!', 'success')
        setTimeout(() => {
            reloadWindow()
        }, 1500);
    }
}