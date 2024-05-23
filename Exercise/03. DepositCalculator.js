// сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)


function depositCalculator(Input) {

    depositSum = Number(Input[0])
    depositTerm = Number(Input[1])
    yearPercent = Number(Input[2] ) / 100

   

    totalLihva = depositSum * yearPercent
    monthlyLihva = totalLihva / 12
    totalSum = depositSum + depositTerm * ((depositSum * yearPercent) / 12)
    
    console.log(totalSum)
    



}

depositCalculator(["200 ","3 ","5.7 "])