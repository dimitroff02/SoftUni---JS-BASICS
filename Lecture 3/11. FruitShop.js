function fruitShop(input){
    let fruit = input[0];
    let day = input[1];
    let Qty = Number(input[2]);
    let totalPrice = 0;
 
    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
 
        switch(fruit){
        case 'banana': totalPrice = Qty * 2.50; break;
        case 'apple': totalPrice = Qty * 1.20; break;
        case 'orange': totalPrice = Qty * 0.85; break;
        case 'grapefruit': totalPrice = Qty * 1.45; break;
        case 'kiwi': totalPrice = Qty * 2.70; break;
        case 'pineapple': totalPrice = Qty * 5.50; break;
        case 'grapes': totalPrice = Qty * 3.85; break;
 
    } 
 
} else if (day === 'Saturday' || day === 'Sunday') {
 
    switch(fruit){
        case 'banana': totalPrice = Qty * 2.70; break;
        case 'apple': totalPrice = Qty * 1.25; break;
        case 'orange': totalPrice = Qty * 0.90; break;
        case 'grapefruit': totalPrice = Qty * 1.60; break;
        case 'kiwi': totalPrice = Qty * 3.00; break;
        case 'pineapple': totalPrice = Qty * 5.60; break;
        case 'grapes': totalPrice = Qty * 4.20; break;
 
    } 
 
} 
    if (totalPrice > 0) {
        console.log(totalPrice.toFixed(2));
    } else {
        console.log('error');
    }
 
 
}
 
fruitShop(["grapes", "Saturday", "0.5"]);