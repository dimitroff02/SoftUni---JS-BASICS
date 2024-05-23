function PetShop(Input) {

let dogFood = Number(Input[0]);
let catFood = Number(Input[1]);


let totalPrice = dogFood * 2.50 + catFood * 4.00
console.log(`${totalPrice} lv.`);

}
PetShop(["13","9"]);