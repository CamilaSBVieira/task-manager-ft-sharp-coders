import { body } from '../elements.js'

export const toggleTheme = () => {
    let newTheme
    let theme = localStorage.getItem('theme') || 'light'
    theme == 'light' ? newTheme = 'dark' : newTheme = 'light'
    localStorage.setItem('theme', newTheme)
    body.dataset.bsTheme = newTheme
}