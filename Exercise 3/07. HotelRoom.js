function hotelRoom(input) {

    let month = input[0]
    let nightCount = Number(input[1])

    let studioPrice = 0
    let apartmentPrice = 0

    switch (month) {

        case "May":
        case "October":
            studioPrice = 50
            apartmentPrice = 65

            if (nightCount > 7 && nightCount <= 14) {
                studioPrice *= 0.95
            } else if (nightCount > 14) {
                studioPrice *= 0.7
                apartmentPrice *= 0.90
            }

            ; break;

        case "June":
        case "September":
            studioPrice = 75.20
            apartmentPrice = 68.70

            if (nightCount > 14) {
                studioPrice *= 0.8
                apartmentPrice *= 0.9
            } else if (nightCount <= 14) {
                studioPrice = 75.20

            }
            ; break;
        case "July":
        case "August":
            studioPrice = 76
            apartmentPrice = 77


            if (nightCount > 14) {
                apartmentPrice *= 0.9

            }
            ; break;



    }

    let totalStudioPrice = (studioPrice * nightCount)
    let totalApartmentPrice = (apartmentPrice * nightCount)

    console.log(`Apartment: ${totalApartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`);

}
hotelRoom(["August", "20"])