function journey(input) {

    let budget = Number(input[0])
    let season = input[1]

    let destination = ""
    let houseType = ""



    if (budget <= 100) {

        destination = "Bulgaria"
        if (season === "summer") {
            budget *= 0.3
        } else {
            budget *= 0.7
        }

    } else if (budget <= 1000) {
        destination = "Balkans"
        if (season === "summer") {
            budget *= 0.4
        } else {
            budget *= 0.8
        }

    } else if (budget > 1000) {
        destination = "Europe"
        budget *= 0.9
    }


    if (season === "winter") {
        houseType = "Hotel"
    } else if (season === "summer") {
        houseType = "Hotel"
    }


    console.log(`Somewhere in ${destination}`)
    console.log(`${houseType} - ${budget.toFixed(2)}`)

}
journey(["50", "summer"])