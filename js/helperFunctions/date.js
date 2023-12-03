export const formatDate = (date, time) => {
    if(date == '' || time == '') {
        return
    }
    let fullDate = `${date} ${time}`
    let d = new Date(fullDate)

    return new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'America/Sao_Paulo',
    }).format(d)
}