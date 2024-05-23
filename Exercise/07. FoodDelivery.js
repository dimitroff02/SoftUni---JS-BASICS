// Пилешко меню – 10.35 лв.
// • Меню с риба – 12.40 лв.
// • Вегетарианско меню – 8.15 лв.

function FoodMenu(Input) {

    let chickenMenu = Number(Input[0]) 
    let fishMenu = Number(Input[1]) 
    let veggyMenu = Number(Input[2])
    
    let totalChickenMenu = chickenMenu * 10.35
    let totalFishMenu = fishMenu * 12.40
    let totalVeggyMenu = veggyMenu * 8.15
    let deliveryPrice = 2.50
    
    let totalMenusPrice = totalChickenMenu + totalFishMenu + totalVeggyMenu
    let dessertPrice = 0.2 * totalMenusPrice

    let totalPrice = totalMenusPrice + dessertPrice + 2.50

    console.log(totalPrice)

}
FoodMenu (["2 ","4 ","3 "])