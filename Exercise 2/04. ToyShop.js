function toyShop(input){
    let tripPrice = Number(input[0])
    let puzzleCount = Number(input[1])
    let dollCount = Number(input[2])
    let bearCount = Number(input[3])
    let minionCount = Number(input[4])
    let truckCount = Number(input[5])

    let moneyEarned = puzzleCount * 2.60 + dollCount * 3 + bearCount * 4.10 + minionCount * 8.20 + truckCount * 2
    let toyCount = puzzleCount + dollCount + bearCount + minionCount + truckCount

   if(toyCount >= 50){

        let discount = 0.25 * moneyEarned
        moneyEarned = moneyEarned - discount
    }

    let rent = 0.10 * moneyEarned
    moneyEarned = moneyEarned - rent

    if(moneyEarned >= tripPrice){
        
        let moneyLeft =moneyEarned - tripPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)

    }else{
        
        let moneyNeeded = tripPrice - moneyEarned
        console.log(`Not enough money! ${ moneyNeeded.toFixed(2)} lv needed.`)

    }
    
}
toyShop(["40.8","20","25","30","50","10"])