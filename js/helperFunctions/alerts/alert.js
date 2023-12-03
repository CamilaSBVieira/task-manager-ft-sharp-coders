import { body } from "../../elements.js"

export const alert = (text, type) => {
    const alert = document.createElement('div')
    alert.classList.add('alert', `alert-${type}`, 'd-flex', 'align-items-center', 'gap-2', 'position-fixed', 'mt-2', 'top-0', 'start-50', 'translate-middle-x')

    if (type == 'danger') {
        alert.innerHTML = `<i class="bi bi-x-square-fill"></i>`
    } else if (type == 'success') {
        alert.innerHTML = `<i class="bi bi-check-circle-fill"></i>`
    }

    const message = document.createElement('div')
    message.innerText = text

    alert.appendChild(message)

    body.appendChild(alert)
    setTimeout(() => {
        alert.remove()
    }, 2500);
}