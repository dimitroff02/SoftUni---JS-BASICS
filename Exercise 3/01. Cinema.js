function cinema(input){

    let movieType = input[0]
    let rows = Number(input[1])
    let cols = Number(input[2])

    let seats = rows * cols
    let price = 0

    switch (movieType){
        case "Premiere": price = seats * 12; break;
        case "Normal": price = seats * 7.50; break
        case "Discount": price = seats * 5; break

    }


console.log(price.toFixed(2));



}
cinema(["Normal", "21", "13"])