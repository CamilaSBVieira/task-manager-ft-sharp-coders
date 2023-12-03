import { users } from "../log/store.js"

export let currUser
export let list
export let currTaskId
export let currTask
let tasks

export function loadUserInfo() {
    currUser = sessionStorage.getItem('user')
    const usersTasks = localStorage.getItem('usersTasks')
    tasks = JSON.parse(usersTasks)

    if (tasks) {
        let findUserTasks = tasks.findIndex(t => t.userId == currUser)
        if (findUserTasks < 0) {
            list = { tasks: [], userId: currUser }
        } else {
            list = tasks.filter(t => t.userId == currUser)[0]
        }
    } else {
        list = { tasks: [], userId: currUser }
    }
    currTaskId = list.tasks.length <= 0 ? 0 : list.tasks[list.tasks.length - 1].id + 1
}

export function getUserName() {
    let index = users.findIndex(u => u.userId == currUser)
    return users[index].name
}

export function changeCurrTask(id) {
    currTask = id
}

export function getTaskById() {
    let currentTask = list.tasks.filter(t => t.id == currTask)[0]
    return currentTask
}

export function create(task) {
    list.tasks.push(task)

    if (!tasks) {
        let newTask = [list]
        localStorage.setItem('usersTasks', JSON.stringify(newTask))
    } else {
        let findUserTasks = tasks.findIndex(t => t.userId == currUser)
        if (findUserTasks < 0) {
            tasks.push(list)
        } else {
            tasks.map(t => {
                if (t.userId == currUser) {
                    return { ...t, tasks: [list] }
                } else {
                    return t
                }
            })
        }

        localStorage.setItem('usersTasks', JSON.stringify(tasks))
    }
}

export function update(task) {
    let newList = list.tasks.map(t => {
        if (t.id == currTask) {
            return { ...t, ...task }
        } else {
            return t
        }
    })
    let newTasks = tasks.map(t => {
        if (t.userId == currUser) {
            return { ...t, tasks: newList }
        } else {
            return t
        }
    })
    localStorage.setItem('usersTasks', JSON.stringify(newTasks))
}

export function del() {
    let newList = list.tasks.filter(t => t.id != currTask)
    list.tasks = newList
    tasks.map(t => {
        if (t.userId == currUser) {
            return list
        } else {
            return t
        }
    })
    localStorage.setItem('usersTasks', JSON.stringify(tasks))
}

export function check() {
    let task = getTaskById()
    task = { ...task, status: 'feita' }
    update(task)
}

export function uncheck(newStatus) {
    let task = getTaskById()
    task = {...task, status: newStatus}
    update(task)
}