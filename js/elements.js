// theme
export const theme = localStorage.getItem('theme') || 'light'
export const body = document.body
export const toggleThemeButton = document.querySelector('[data-role="toggleTheme"]')

// log
export const loginForm = document.querySelector('[data-role="loginForm"]')
export const registerForm = document.querySelector('[data-role="registerForm"]')
export const emailLogin = document.getElementById('emailLogin')
export const passwordLogin = document.getElementById('passwordLogin')
export const loginButton = document.querySelector('[data-role="loginButton"]')
export const logoutButton = document.querySelector('[data-role="logoutButton"]')
export const registerButton = document.querySelector('[data-role="registerButton"]')
export const nameRegister = document.getElementById('nameRegister')
export const emailRegister = document.getElementById('emailRegister')
export const passwordRegister = document.getElementById('passwordRegister')

// name
export const userNameEl = document.querySelector('[data-role="userName"]')

// create
export const createButton = document.querySelector('[data-role="create"]')
export const createForm = document.querySelector('[data-role="createTask"]')
export const nameInput = document.getElementById('name')
export const beginDateInput = document.getElementById('beginDate')
export const finishDateInput = document.getElementById('finishDate')
export const beginTimeInput = document.getElementById('beginTime')
export const finishTimeInput = document.getElementById('finishTime')
export const descriptionInput = document.getElementById('description')

// table
export const table = document.querySelector('[data-role="table"]')
export const tableBody = document.querySelector('[data-role="tableBody"]')

// edit Buttons
export const editButtons = document.querySelector('[data-role="editButtons"]')
export const editButton = document.querySelector('[data-role="editButton"]')

// modal
export const title = document.querySelector('[data-role="taskTitle"]')
export const description = document.querySelector('[data-role="taskDescription"]')
