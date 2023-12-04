import { body, theme, toggleThemeButton } from "../elements.js";
import { toggleTheme } from './toggleTheme.js'

// window.onload = () => { 
    body.dataset.bsTheme = theme
// }

toggleThemeButton.onclick = toggleTheme
