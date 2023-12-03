import { reloadWindow } from '../helperFunctions/reload.js'
import { del } from "./store.js";

export function deleteTask() {
    del()
    alert('Tarefa deletada com sucesso!', 'success')
    setTimeout(() => {
        reloadWindow()
    }, 1500);
}