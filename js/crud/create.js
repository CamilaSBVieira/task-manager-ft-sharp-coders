import { nameInput, beginDateInput, finishDateInput, beginTimeInput, finishTimeInput, descriptionInput } from '../elements.js'
import { alert } from '../helperFunctions/alert.js'
import { reloadWindow } from '../helperFunctions/reload.js'
import { currTaskId, create } from './store.js'

export const createTask = (e) => {
    e.preventDefault()
    let name = nameInput.value
    let beginDate = beginDateInput.value
    let finishDate = finishDateInput.value
    let beginTime = beginTimeInput.value
    let finishTime = finishTimeInput.value
    let description = descriptionInput.value

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
        id: currTaskId,
        name,
        beginDate,
        finishDate,
        beginTime,
        finishTime,
        description,
        status
    }

    create(task)
    alert('Tarefa criada com sucesso!', 'success')
    setTimeout(() => {
        reloadWindow()
    }, 1500);
}
