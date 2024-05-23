function Supplies(Input) {

    let countPens = Number(Input[0])
    let countMarkers = Number(Input[1])
    let litersMedix = Number(Input[2])
    let discount = Number(Input[3])

    let totalPens = countPens * 5.80
    let totalMarkers = countMarkers * 7.20
    let totalLitersMedix = litersMedix * 1.20

    
    let totalSum = totalPens + totalMarkers + totalLitersMedix 
    let discountsum = totalSum - (totalSum * discount / 100)


    console.log(discountsum)


}
Supplies(["4 ","2 ","5 ","13 "])