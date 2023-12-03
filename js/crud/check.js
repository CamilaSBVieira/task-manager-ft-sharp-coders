import { checkTaskAlert } from '../helperFunctions/checkTaskAlert.js'
import { getInputValues } from '../helperFunctions/getInputValues.js'
import { reloadWindow } from '../helperFunctions/reload.js'
import { validateCreateTaskForm } from '../helperFunctions/validateCreateTaskForm.js'
import { update } from "./store.js"

export const checkTask = () => {

    let { name, beginDate, beginTime, finishDate, finishTime, description } = getInputValues()

    if (!name || !beginDate || !finishDate || !beginTime || !finishTime || !description) {
        validateCreateTaskForm()
    } else {
        let status = 'feita'
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
        checkTaskAlert()
        setTimeout(() => {
            reloadWindow()
        }, 1500);
    }
}