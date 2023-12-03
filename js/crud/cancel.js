import {editButtons, createButton, table } from '../elements.js'

export function cancelEdit() {
    editButtons.classList.add('d-none')
    editButtons.classList.remove('d-flex')
    createButton.classList.add('d-block')
    createButton.classList.remove('d-none')
    table.classList.remove('d-none')
}