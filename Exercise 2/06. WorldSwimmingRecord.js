function swimmingRecord(input){

    let currentRecord = Number(input[0])
    let distance = Number(input[1])
    let timePerMeter = Number(input[2])

    let initialTime = distance * timePerMeter
    let delayTime = Math.floor(distance / 15) 
    let totalDelayTime = delayTime * 12.5

    let totalTime = initialTime + totalDelayTime

    if(currentRecord > totalTime){


        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }else{
            let secondsNeeded = totalTime - currentRecord
        console.log(`No, he failed! He was ${secondsNeeded.toFixed(2)} seconds slower.`)
    }




}
swimmingRecord(["10464","1500","20"])