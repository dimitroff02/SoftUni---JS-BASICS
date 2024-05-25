function summerOutfit(input) {


    let degrees = Number(input[0])
    let partOfDay = input[1]

    let outfit = ""
    let shoes = ""

    if (partOfDay === "Morning") {

        if (degrees <= 18) {

            outfit = "Sweatshirt"
            shoes = "Sneakers"


        } else if (degrees <= 24) {

            outfit = "Shirt"
            shoes = "Moccasins"
        } else if (degrees >= 25) {
            outfit = "T-Shirt"
            shoes = "Sandals"
        }


    }

    if (partOfDay === "Afternoon") {
        if (degrees <= 18) {
            outfit = "Shirt"
            shoes = "Moccasins"

        } else if (degrees <= 24) {


            outfit = "T-Shirt"
            shoes = "Sandals"



        } else if (degrees >= 25) {
            outfit = "Swim Suit"
            shoes = "Barefoot"
        }





    }

    if (partOfDay === "Evening") {

        if (degrees <= 18) {
            outfit = "Shirt"
            shoes = "Moccasins"
        } else if (degrees <= 24) {

            outfit = "Shirt"
            shoes = "Moccasins"

        } else if (degrees >= 25) {

            outfit = "Shirt"
            shoes = "Moccasins"

        }



    }





    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);

}
summerOutfit(["34", "Afternoon"])