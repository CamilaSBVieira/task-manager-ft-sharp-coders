export let users = JSON.parse(localStorage.getItem('users')) || []

export const create = (user) => {
    users.push(user)
    sessionStorage.setItem("user", user.userId)
    localStorage.setItem('users', JSON.stringify(users))
}