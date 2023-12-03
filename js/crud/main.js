import { createTask } from "./create.js"
import { edit } from "./edit.js"
import { createForm, editButton, logoutButton, userNameEl } from "../elements.js"
import { listTasks } from "./list.js"
import { logout } from '../log/logout.js'
import { getUserName, loadUserInfo } from "./store.js"

// window.onload = () => {
    loadUserInfo()
    userNameEl.innerText = getUserName()
    listTasks()
// }

createForm.onsubmit = createTask

editButton.onclick = edit

logoutButton.onclick = logout
