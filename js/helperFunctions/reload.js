import { beginDateInput, beginTimeInput, descriptionInput, finishDateInput, finishTimeInput, nameInput } from "../elements.js"

export const reloadWindow = () => {
    nameInput.value = ""
    beginDateInput.value = ""
    finishDateInput.value = ""
    beginTimeInput.value = ""
    finishTimeInput.value = ""
    descriptionInput.value = ""
    window.location.reload()
}