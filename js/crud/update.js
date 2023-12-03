import { update } from "./store.js"
import { reloadWindow } from '../helperFunctions/reload.js'
import { updatedTaskAlert } from "../helperFunctions/alerts/updatedTaskAlert.js"
import { createStatus } from "../helperFunctions/createStatus.js"
import { getInputValues } from "../helperFunctions/form/getInputValues.js"
import { validateCreateTaskForm } from "../helperFunctions/form/validateCreateTaskForm.js"

export const updateTask = () => {
    
    let { name, beginDate, beginTime, finishDate, finishTime, description } = getInputValues()
    
    if (!name || !beginDate || !finishDate || !beginTime || !finishTime || !description) {
        validateCreateTaskForm()
    } else {
        let status = createStatus(beginDate, beginTime, finishDate, finishTime)
        
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
        updatedTaskAlert()
        setTimeout(() => {
            reloadWindow()
        }, 1500);
    }

}