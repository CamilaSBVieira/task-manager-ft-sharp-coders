import { edit } from "./edit.js"
import { description, tableBody, title } from "../elements.js"
import { list, changeCurrTask, check, uncheck } from "./store.js"
import { formatDate } from "../helperFunctions/date.js"
import { addStatusClass } from "../helperFunctions/dom/addStatusClass.js"
import { reloadWindow } from "../helperFunctions/reload.js"
import { createElement } from "../helperFunctions/dom/createElement.js"
import { createStatus } from "../helperFunctions/createStatus.js"
import { checkTaskAlert } from "../helperFunctions/alerts/checkTaskAlert.js"
import { uncheckTaskAlert } from '../helperFunctions/alerts/uncheckTaskAlert.js'

export const listTasks = () => {
    if (list.tasks.length > 0) {
        list.tasks.map(t => {
            const tr = createElement('tr', ['text-center'], `
            <th scope="row" data-bs-toggle="modal" data-bs-target="#taskModal">${t.name}</th>
            <td data-bs-toggle="modal" data-bs-target="#taskModal" class="d-none d-md-table-cell">${formatDate(t.beginDate, t.beginTime)}</td>
            <td data-bs-toggle="modal" data-bs-target="#taskModal" class="d-none d-md-table-cell">${formatDate(t.finishDate, t.finishTime)}</td>
            `)
            tr.dataset.id = t.id
            tr.role = 'button'
            tr.onclick = () => {
                listModal(t)
                changeCurrTask(tr.dataset.id)
            }

            let styleClass = addStatusClass(t.status)
            const status = createElement('td', [styleClass], `<p>${t.status}</p>`)
            status.dataset.bsToggle = "modal"
            status.dataset.bsTarget = "#taskModal"


            const button = createElement('td', null, `<i class="bi bi-pencil-square"></i>`)
            button.dataset.role = 'editButton'
            button.dataset.id = t.id
            button.role = "button"
            button.onclick = () => {
                changeCurrTask(tr.dataset.id)
                edit()
            }


            let inner = t.status == 'feita' ? `<i class="bi bi-x-circle"></i>` : `<i class="bi bi-check2-circle d-inline-block me-1"></i>`
            const checkBt = createElement('td', null, inner)
            checkBt.dataset.role = 'editButton'
            checkBt.dataset.id = t.id
            checkBt.role = "button"
            checkBt.onclick = () => {
                changeCurrTask(tr.dataset.id)

                let status = createStatus(t.beginDate, t.beginTime, t.finishDate, t.finishTime)

                if(t.status == 'feita') {
                    uncheck(status)
                    uncheckTaskAlert()
                } else {
                    check()
                    checkTaskAlert()
                }

                setTimeout(() => {
                    reloadWindow()
                }, 1500);
            }

            tr.appendChild(status)
            tr.appendChild(button)
            tr.appendChild(checkBt)
            tableBody.appendChild(tr)
        })
    } else {
        const tr = createElement('tr', null, null)
        const td = createElement('td', ['text-center', 'fw-bold'], 'Crie sua primeira tarefas, elas apareceram aqui!')

        td.colSpan = 6

        tr.appendChild(td)
        tableBody.appendChild(tr)
    }
}

const listModal = (task) => {
    title.innerText = task.name
    description.innerText = task.description
}