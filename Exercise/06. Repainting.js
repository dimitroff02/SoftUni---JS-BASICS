function Rumen(Input){

    let nylonQty = Number(Input[0]) 
    let paintQty = Number(Input[1]) 
    let thinnerQty = Number(Input[2])
    let hoursNeeded = Number(Input[3])

    let bags = 0.40
    let extraPaintQty = 0.1 * paintQty 
    let totalPaintQty = extraPaintQty + paintQty
   
    let totalNylonQty = nylonQty + 2

    totalMaterialsSum = totalNylonQty * 1.50 + totalPaintQty * 14.50 + thinnerQty * 5 + bags
    totalWorkersSum = (totalMaterialsSum * 0.3) * hoursNeeded
    
    totalSum = totalMaterialsSum + totalWorkersSum

    console.log(totalSum)
    

    }
Rumen(["5 ","10 ","10 ","1 "])