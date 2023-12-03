import { deletedTaskAlert } from '../helperFunctions/deletedTaskAlert.js';
import { reloadWindow } from '../helperFunctions/reload.js'
import { del } from "./store.js";

export function deleteTask() {
    del()
    deletedTaskAlert()
    setTimeout(() => {
        reloadWindow()
    }, 1500);
}