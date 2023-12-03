import { beginDateInput, beginTimeInput, descriptionInput, finishDateInput, finishTimeInput, nameInput } from "../elements.js"
import { getTaskById } from "./store.js"
import { editModeOn } from "../helperFunctions/editModeOn.js"

export const edit = () => {
    editModeOn()

    const currentTask = getTaskById()

    nameInput.value = currentTask.name
    beginDateInput.value = currentTask.beginDate
    finishDateInput.value = currentTask.finishDate
    beginTimeInput.value = currentTask.beginTime
    finishTimeInput.value = currentTask.finishTime
    descriptionInput.value = currentTask.description

}