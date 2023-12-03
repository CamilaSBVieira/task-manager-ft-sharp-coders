import { beginDateInput, beginTimeInput, descriptionInput, finishDateInput, finishTimeInput, nameInput } from "../../elements.js"

export const getInputValues = () => {
    let name = nameInput.value
    let beginDate = beginDateInput.value
    let finishDate = finishDateInput.value
    let beginTime = beginTimeInput.value
    let finishTime = finishTimeInput.value
    let description = descriptionInput.value

    return {name, beginDate, finishDate, beginTime, finishTime, description}
}