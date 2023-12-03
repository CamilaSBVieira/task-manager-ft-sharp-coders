import { users } from "../store.js"

export const generateId = () => {
    let currId
    users.length <= 0 ? currId = 1 : users[users.length - 1].userId
    return currId
}