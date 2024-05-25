function sumSeconds(Input) {

    let timeFirst = Number(Input[0])
    let timeSecond = Number(Input[1])
    let timeThird = Number(Input[2])

    let totalTime = timeFirst + timeSecond + timeThird

    let minutes = Math.trunc(totalTime / 60)
    let seconds = totalTime % 60

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)

    } else { console.log(`${minutes}:${seconds}`) }

}
sumSeconds(["35", "45", "44"])