import { cancelEdit } from "../crud/cancel.js"
import { checkTask } from "../crud/check.js"
import { deleteTask } from "../crud/delete.js"
import { updateTask } from "../crud/update.js"
import { createButton, editButtons, table } from "../elements.js"

export const editModeOn = () => {
    editButtons.classList.add('d-flex')
    editButtons.classList.remove('d-none')
    createButton.classList.add('d-none')
    table.classList.add('d-none')

    const deleteButton = document.querySelector('[data-role="deleteButton"]')
    const updateButton = document.querySelector('[data-role="updateButton"]')
    const checkButton = document.querySelector('[data-role="checkButton"]')
    const cancelButton = document.querySelector('[data-role="cancelButton"]')

    deleteButton.onclick = deleteTask
    updateButton.onclick = updateTask
    checkButton.onclick = checkTask
    cancelButton.onclick = cancelEdit
}