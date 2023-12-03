import { deleteSession } from "./store.js"

export const logout = () => {
    deleteSession()
    window.location.replace('./index.html')
}