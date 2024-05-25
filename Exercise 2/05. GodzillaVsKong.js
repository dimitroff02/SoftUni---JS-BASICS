function godzillaVsKong(input) {

    let movieBudget = Number(input[0])
    let actorCount = Number(input[1])
    let singleCostumePrice = Number(input[2])

    let decor = 0.1 * movieBudget

    let totalPrice = actorCount * singleCostumePrice

    if (actorCount > 150) {

        totalPrice = totalPrice * 0.9
    }

    let totalExpenses = decor + totalPrice

    if (movieBudget >= totalExpenses) {
        let moneyLeft = movieBudget - totalExpenses

        console.log("Action!")
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)

    } else {
        let moneyNeeded = totalExpenses - movieBudget
        console.log("Not enough money!")
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    }


}
godzillaVsKong(["20000", "120", "55.5"])