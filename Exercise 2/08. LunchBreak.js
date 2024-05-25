function lunchBreak(input){

    let movieTitle = input[0]
    let movieDuration = Number(input[1])
    let breakDuration = Number(input[2])

    let lunchDuration = 1/8 * breakDuration
    let leisureDuration = 1/4 * breakDuration

    let totalFreeTime = breakDuration - lunchDuration - leisureDuration

    if(totalFreeTime >= movieDuration){

        let timeLeft = totalFreeTime - movieDuration
        console.log(`You have enough time to watch ${movieTitle} and left with ${Math.ceil(timeLeft)} minutes free time.`)
    }else{
        let timeNeeded = movieDuration - totalFreeTime
        console.log(`You don't have enough time to watch ${movieTitle}, you need ${Math.ceil(timeNeeded)} more minutes.`)
    }


}
lunchBreak(["Game of Thrones","60","96"])