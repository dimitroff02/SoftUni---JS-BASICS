function smallShop(input) {

    let product = (input[0])
    let town = (input[1])
    let qty = Number(input[2])

    let finalResult = 0

    if (town === "Sofia") {
        switch (product) {
            case "coffee": finalResult = qty * 0.50; break
            case "water": finalResult = qty * 0.80; break
            case "beer": finalResult = qty * 1.20; break
            case "sweets": finalResult = qty * 1.45; break
            case "peanuts": finalResult = qty * 1.60; break
        }
    }
    else if (town === "Plovdiv")
        switch (product) {
            case "coffee": finalResult = qty * 0.40; break
            case "water": finalResult = qty * 0.70; break
            case "beer": finalResult = qty * 1.15; break
            case "sweets": finalResult = qty * 1.30; break
            case "peanuts": finalResult = qty * 1.50; break
        }
    else if (town === "Varna") {


        switch (product) {
            case "coffee": finalResult = qty * 0.45; break
            case "water": finalResult = qty * 0.70; break
            case "beer": finalResult = qty * 1.10; break
            case "sweets": finalResult = qty * 1.35; break
            case "peanuts": finalResult = qty * 1.55; break

        }



    }
    console.log(finalResult);

}
smallShop(["coffee", "Varna", "2"])