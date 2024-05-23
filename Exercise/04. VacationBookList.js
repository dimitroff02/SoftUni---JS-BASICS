function Books(Input) {

    let pages = Number(Input[0])
    let pagesPerHour = Number(Input[1])
    let readingDays = Number(Input[2])

    let totalReadingTime = pages / pagesPerHour
    let pagesPerDay = totalReadingTime / readingDays 

    console.log(pagesPerDay)
    
}
Books(["212","20","2"])