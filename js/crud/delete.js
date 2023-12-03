import { reloadWindow } from '../helperFunctions/reload.js'
import { del } from "./store.js";
import { deletedTaskAlert } from '../helperFunctions/alerts/deletedTaskAlert.js'

export function deleteTask() {
    del()
    deletedTaskAlert()
    setTimeout(() => {
        reloadWindow()
    }, 1500);
}