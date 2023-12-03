import { users } from "../store.js"

export const generateId = () => {
    let currId
    currId = users.length <= 0 ? currId = 1 : users[users.length - 1].userId + 1
    return currId
}