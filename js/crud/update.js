import { beginDateInput, beginTimeInput, descriptionInput, finishDateInput, finishTimeInput, nameInput } from "../elements.js"
import { update } from "./store.js"
import { reloadWindow } from '../helperFunctions/reload.js'
import { alert } from "../helperFunctions/alert.js"

export const updateTask = () => {
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
        let dataAtual = new Date().getTime()
        let begin = new Date(`${beginDate} ${beginTime}`).getTime()
        let finish = new Date(`${finishDate} ${finishTime}`).getTime()
        let status
        if (dataAtual >= begin && dataAtual <= finish) {
            status = 'em andamento'
        } else if (dataAtual > finish) {
            status = 'em atraso'
        } else if (dataAtual < begin) {
            status = 'pendente'
        }
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
        alert('Tarefa alterada com sucesso!', 'success')
        setTimeout(() => {
            reloadWindow()
        }, 1500);
    }

}