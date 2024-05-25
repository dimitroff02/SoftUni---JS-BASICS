function skiTrip(input) {

    let nightsCount = Number(input[0]) - 1
    let houseType = input[1]
    let opinion = input[2]

    let price = 0

    switch (houseType) {

        case "room for one person":
            price = nightsCount * 18

                ; break;

        case "apartment":
            price = nightsCount * 25

            if (nightsCount < 10) {
                price *= 0.7
            } else if (nightsCount <= 15) {
                price *= 0.65
            } else {
                price *= 0.5
            }




            ; break;

        case "president apartment":
            price = nightsCount * 35
            if (nightsCount < 10) {
                price *= 0.9
            } else if (nightsCount <= 15) {
                price *= 0.85

            } else {
                price *= 0.8
            }
            ; break;

    }

    if(opinion === "positive"){
        price *= 1.25
    }else{
        price *= 0.9
    }


    console.log(price.toFixed(2));






}
skiTrip(["14", "apartment", "positive"])