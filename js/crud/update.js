import { update } from "./store.js"
import { reloadWindow } from '../helperFunctions/reload.js'
import { updatedTaskAlert } from "../helperFunctions/alerts/updatedTaskAlert.js"
import { createStatus } from "../helperFunctions/createStatus.js"
import { getInputValues } from "../helperFunctions/form/getInputValues.js"
import { validateCreateTaskForm } from "../helperFunctions/form/validateCreateTaskForm.js"
import { createFullDate } from "../helperFunctions/dateAndTime.js"
import { validateTaskDate } from "../helperFunctions/form/validateTaskDate.js"

export const updateTask = () => {
    
    let { name, beginDate, beginTime, finishDate, finishTime, description } = getInputValues()

    let begin = createFullDate(beginDate, beginTime)
    let finish = createFullDate(finishDate, finishTime)
    
    if (!name || !beginDate || !finishDate || !beginTime || !finishTime || !description) {
        validateCreateTaskForm()
    } else if (finish < begin) {
        validateTaskDate()
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