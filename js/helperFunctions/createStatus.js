export const createStatus = (beginDate, beginTime, finishDate, finishTime) => {
    let status
    let dataAtual = new Date().getTime()
    let begin = new Date(`${beginDate} ${beginTime}`).getTime()
    let finish = new Date(`${finishDate} ${finishTime}`).getTime()
    if (dataAtual >= begin && dataAtual <= finish) {
        status = 'em andamento'
    } else if (dataAtual > finish) {
        status = 'em atraso'
    } else if (dataAtual < begin) {
        status = 'pendente'
    }
    return status
}