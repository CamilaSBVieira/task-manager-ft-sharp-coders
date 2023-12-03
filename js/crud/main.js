import { createTask } from "./create.js"
import { edit } from "./edit.js"
import { createForm, editButton, logoutButton, userNameEl } from "../elements.js"
import { listTasks } from "./list.js"
import { logout } from '../log/logout.js'
import { currUser, getUserName, loadUserInfo } from "./store.js"
import { notLoggedAlert } from '../helperFunctions/alerts/notLoggedAlert.js'

loadUserInfo()
if (!currUser) {
    notLoggedAlert()
    setTimeout(() => {
        window.location = './index.html'
    }, 1500);
}
userNameEl.innerText = getUserName()
listTasks()

createForm.onsubmit = createTask

editButton.onclick = edit

logoutButton.onclick = logout
