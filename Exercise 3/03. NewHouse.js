function newHouse(input) {

    let flowersType = input[0]
    let flowersCount = Number(input[1])
    let budget = Number(input[2])

    let price = 0


    switch (flowersType) {

        case "Roses":

            price = flowersCount * 5;

            break;

        case "Dahlias":

            price = flowersCount * 3.80;

            break;

        case "Tulips":


            price = flowersCount * 2.80;

            break;

        case "Narcissus":

            price = flowersCount * 3;

            break;

        case "Gladiolus":

            price = flowersCount * 2.50;

            break

    }

    if (flowersType === "Roses" && flowersCount > 80) {
        price *= 0.9
    } else if (flowersType === "Dahlias" && flowersCount > 90) {
        price *= 0.85
    } else if (flowersType === "Tulips" && flowersCount > 80) {
        price *= 0.85
    } else if (flowersType === "Narcissus" && flowersCount < 120) {
        price *= 1.15
    } else if (flowersType === "Gladiolus" && flowersCount < 80) {
        price *= 1.2
    }



    if (budget >= price) {
        let moneyLeft = budget - price

        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${moneyLeft.toFixed(2)} leva left.`);

    } else {
        let moneyNeeded = price - budget

        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }






}
newHouse(["Roses", "55", "250"])