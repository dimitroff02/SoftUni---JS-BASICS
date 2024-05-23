function greeningPrice (Input) {


let yardGreeening = Number(Input[0]) * 7.61
let discount = 0.18 * yardGreeening
let totalSum = yardGreeening - discount

console.log(`The final price is: ${totalSum} lv.`)
console.log(`The discount is: ${discount} lv.` )

}

greeningPrice(["240"])