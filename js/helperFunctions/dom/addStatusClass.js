export const addStatusClass = (status) => {
    let styleClass
    if (status == 'em andamento') {
        styleClass = 'ongoing'
    } else if (status == 'em atraso') {
        styleClass = 'late'
    } else if (status == 'pendente') {
        styleClass = 'pending'
    } else if (status == 'feita') {
        styleClass = 'done'
    }
    return styleClass
}