import { createStatus } from '../helperFunctions/createStatus.js'
import { getInputValues } from '../helperFunctions/form/getInputValues.js'
import { reloadWindow } from '../helperFunctions/reload.js'
import { taskCreatedAlert } from '../helperFunctions/alerts/taskCreatedAlert.js'
import { currTaskId, create } from './store.js'
import { formatDate } from '../helperFunctions/date.js'
import { validateTaskDate } from '../helperFunctions/form/validateTaskDate.js'
import { createFullDate } from '../helperFunctions/dateAndTime.js'

export const createTask = (e) => {
    e.preventDefault()

    let { name, beginDate, beginTime, finishDate, finishTime, description } = getInputValues()
    let begin = createFullDate(beginDate, beginTime)
    let finish = createFullDate(finishDate, finishTime)
    if (finish < begin) {
        validateTaskDate()
    } else {

        let status = createStatus(beginDate, beginTime, finishDate, finishTime)

        const task = {
            id: currTaskId,
            name,
            beginDate,
            finishDate,
            beginTime,
            finishTime,
            description,
            status
        }

        create(task)
        taskCreatedAlert()
        setTimeout(() => {
            reloadWindow()
        }, 1500);
    }
}
