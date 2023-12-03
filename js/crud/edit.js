import { checkTask } from "./check.js"
import { deleteTask } from "./delete.js"
import { beginDateInput, beginTimeInput, createButton, descriptionInput, editButtons, finishDateInput, finishTimeInput, nameInput, table } from "../elements.js"
import { getTaskById } from "./store.js"
import { updateTask } from './update.js'
import { cancelEdit } from './cancel.js'

const deleteButton = document.querySelector('[data-role="deleteButton"]')
const updateButton = document.querySelector('[data-role="updateButton"]')
const checkButton = document.querySelector('[data-role="checkButton"]')
const cancelButton = document.querySelector('[data-role="cancelButton"]')

export const edit = () => {
    editButtons.classList.add('d-flex')
    editButtons.classList.remove('d-none')
    createButton.classList.add('d-none')
    table.classList.add('d-none')

    const currentTask = getTaskById()

    nameInput.value = currentTask.name
    beginDateInput.value = currentTask.beginDate
    finishDateInput.value = currentTask.finishDate
    beginTimeInput.value = currentTask.beginTime
    finishTimeInput.value = currentTask.finishTime
    descriptionInput.value = currentTask.description

    deleteButton.onclick = deleteTask
    updateButton.onclick = updateTask
    checkButton.onclick = checkTask
    cancelButton.onclick = cancelEdit

}