// Баскетболни кецове – цената им е 40% по-малка от таксата за една година

// • Баскетболен екип – цената му е 20% по-евтина от тази на кецовете

// • Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип

// • Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

function basketballEquip (Input) {

let yearlyTrainingPrice = Number(Input[0])
let sketchers = yearlyTrainingPrice - ( yearlyTrainingPrice * 0.4)
let equipment = sketchers - (0.2 * sketchers)
let basketBall = 1/4 * equipment
let basketballAccesoaries = 1/5 * basketBall

totalPrice = yearlyTrainingPrice + sketchers + equipment + basketBall + basketballAccesoaries

console.log(totalPrice)


}
basketballEquip(["365"])