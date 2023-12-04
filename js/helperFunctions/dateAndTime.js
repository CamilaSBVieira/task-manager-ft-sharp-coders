export const createFullDate = (date, time) => {
    let d = new Date(date)
    let timeArr = time.split(':')
    d.setHours(timeArr[0])
    d.setMinutes(timeArr[1])

    return d.getTime()
}