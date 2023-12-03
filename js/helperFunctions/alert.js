import { body } from "../elements.js"

export const alert = (text, type) => {
    const alert = document.createElement('div')
    if (type == 'error') {
        alert.classList.add('alert', 'alert-danger', 'd-flex', 'align-items-center', 'gap-2', 'position-fixed', 'mt-2', 'top-0', 'start-50', 'translate-middle-x')
        alert.innerHTML = `<i class="bi bi-x-square-fill"></i><div>${text}</div>`
    } else if (type == 'success') {
        alert.classList.add('alert', 'alert-success', 'd-flex', 'align-items-center', 'gap-2', 'position-fixed', 'mt-2', 'top-0', 'start-50', 'translate-middle-x')
        alert.innerHTML = `<i class="bi bi-check-circle-fill"></i><div>${text}</div>`
    }
    body.appendChild(alert)
    setTimeout(() => {
        alert.remove()
    }, 2500);
}