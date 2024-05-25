function shopping(input){

   let peterBudget = Number(input[0])
   let videoCardCount = Number(input[1])
   let cpuCount = Number(input[2])
   let ramCount = Number(input[3])

   let videoCardPrice = 250 * videoCardCount
   
   let cpuPrice = 0.35 * videoCardPrice
   let cpuSum = cpuCount * cpuPrice
   
   let ramPrice = 0.1 * videoCardPrice
   let ramSum = ramCount * ramPrice

   let totalPrice = videoCardPrice + cpuSum + ramSum


   if(videoCardCount > cpuCount){
    
    let discount = 0.15 * totalPrice
    totalPrice = totalPrice - discount
   }


   if(peterBudget >= totalPrice){

    let budgetLeft = peterBudget - totalPrice
    console.log(`You have ${budgetLeft.toFixed(2)} leva left!`)
   }else{

    let budgetNeeded = totalPrice - peterBudget
    console.log(`Not enough money! You need ${budgetNeeded.toFixed(2)} leva more!`)
   }



}
shopping(["900","2","1","3"])