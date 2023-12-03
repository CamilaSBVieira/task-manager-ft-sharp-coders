import { edit } from "./edit.js"
import { tableBody } from "../elements.js"
import { list, changeCurrTask, check, uncheck } from "./store.js"
import { formatDate } from "../helperFunctions/date.js"
import { addStatusClass } from "../helperFunctions/addStatusClass.js"
import { reloadWindow } from "../helperFunctions/reload.js"
import { alert } from "../helperFunctions/alert.js"

export const listTasks = () => {
    if (list.tasks.length > 0) {
        list.tasks.map(t => {
            const el = document.createElement('tr')
            el.dataset.id = t.id
            el.onclick = () => {
                listModal(t)
                changeCurrTask(el.dataset.id)
            }
            el.classList.add('text-center')
            el.innerHTML = `<th scope="row" data-bs-toggle="modal" data-bs-target="#taskModal">${t.name}</th>
            <td data-bs-toggle="modal" data-bs-target="#taskModal" class="d-none d-md-table-cell">${formatDate(t.beginDate, t.beginTime)}</td>
            <td data-bs-toggle="modal" data-bs-target="#taskModal" class="d-none d-md-table-cell">${formatDate(t.finishDate, t.finishTime)}</td>`
            const status = document.createElement('td')
            status.dataset.bsToggle = "modal"
            status.dataset.bsTarget = "#taskModal"
            status.innerHTML = `<p>${t.status}</p>`
            let styleClass = addStatusClass(t.status)
            status.classList.add(styleClass)
            el.appendChild(status)
            const button = document.createElement('td')
            button.dataset.role = 'editButton'
            button.dataset.id = t.id
            button.role = "button"
            button.onclick = () => {
                changeCurrTask(el.dataset.id)
                edit()
            }
            button.innerHTML = `<i class="bi bi-pencil-square"></i>`
            el.appendChild(button)
            const checkBt = document.createElement('td')
            checkBt.dataset.role = 'editButton'
            checkBt.dataset.id = t.id
            checkBt.role = "button"
            checkBt.onclick = () => {
                changeCurrTask(el.dataset.id)

                let dataAtual = new Date().getTime()
                let begin = new Date(`${t.beginDate} ${t.beginTime}`).getTime()
                let finish = new Date(`${t.finishDate} ${t.finishTime}`).getTime()
                let status
                if (dataAtual >= begin && dataAtual <= finish) {
                    status = 'em andamento'
                } else if (dataAtual > finish) {
                    status = 'em atraso'
                } else if (dataAtual < begin) {
                    status = 'pendente'
                }

                t.status == 'feita' ? uncheck(status) : check()

                t.status == 'feita' ? alert('Tarefa desfeita!', 'success') : alert('Tarefa feita!', 'success')
                setTimeout(() => {
                    reloadWindow()
                }, 1500);
            }
            checkBt.innerHTML = t.status == 'feita' ? `<i class="bi bi-x-circle"></i>` : `<i class="bi bi-check2-circle d-inline-block me-1"></i>`
            el.appendChild(checkBt)
            tableBody.appendChild(el)
        })
    } else {
        const tr = document.createElement('tr')
        const td = document.createElement('td')
        td.colSpan = 5
        td.classList.add('text-center', 'fw-bold')
        td.innerText = 'Suas tarefas apareceram aqui! Crie sua primeira tarefa.'
        tr.appendChild(td)
        tableBody.appendChild(tr)
    }
}

const listModal = (task) => {
    const title = document.querySelector('[data-role="taskTitle"]')
    const description = document.querySelector('[data-role="taskDescription"]')
    title.innerText = task.name
    description.innerText = task.description
}