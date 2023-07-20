const fruits = {
    orange : 100,
    apple : 150,
    mango : 200,
    banana : 70,
}

let total = 0;

const records = [];

function buy(fruit, quantity){
    let cost = fruits[fruit] * quantity;
    // let totalCost = tax(cost)
    total += cost;
    const recordObj = {
        Name : fruit,
        Quantity : quantity + " လုံး",
        Cost : cost + " mmk",
        Tax : tax(cost) + " mmk",
        Total : cost + tax(cost) + " mmk"
    }

    records[records.length] = recordObj;
    return `${fruit} ${quantity} လုံး = ${cost} mmk`;
}

// 100 ကို 5% tax ဆောင်ရမယ်
// 100 * 0.05 

function tax(totalCost, taxAmount = 5){
    return totalCost * (taxAmount/100);
}

// console.log(tax(100))
console.log(buy("apple", 4));
console.log(buy("mango", 7));
console.log(buy("banana", 3));
console.log(buy("orange", 15))

console.log("Total cost : " + total + " mmk")
console.log("Tax : " + tax(total) + " mmk")
console.log("Net Cost : " + (total + tax(total)) + " mmk")

console.table(records)