export const createElement = (el, classList, inner) => {
    const element = document.createElement(el)
    classList && element.classList.add(...classList)
    if(inner) element.innerHTML = inner 
    return element
}