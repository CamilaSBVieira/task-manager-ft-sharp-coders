import { createStatus } from '../helperFunctions/createStatus.js'
import { getInputValues } from '../helperFunctions/getInputValues.js'
import { reloadWindow } from '../helperFunctions/reload.js'
import { taskCreatedAlert } from '../helperFunctions/taskCreatedAlert.js'
import { currTaskId, create } from './store.js'

export const createTask = (e) => {
    e.preventDefault()
    
    let { name, beginDate, beginTime, finishDate, finishTime, description } = getInputValues()

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
