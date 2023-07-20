// If else conditional statement homework

// By Pyae Sone Phone Myint

// Using Laptop
let battery = false;

if(battery = true){
    console.log("You can use Laptop till it is dead.")
}else {
    console.log("Sorry!Battery is dead.")
};

// ==========================================================================

// Membership

let member = true;

if(member = true){
    console.log("Fees : 15000 mmk")
}else {
    console.log("Fees : 25000 mmk")
}

// ==========================================================================

// Sign Up or Login

let alreadyLogin = true;

if(alreadyLogin = true){
    console.log("Login Here")
}else{
    console.log("Sign Up here")
}

// ==========================================================================

// Using Electricity
// when power cut => inverter on 
// when inverter off we have a blackout

function light(electricity = true, inverter = false){
    if (electricity){
        return "You can do whatever you want."
    }else {
        if(inverter){
            return "You should turn off something if you don't necessary."
        }else {
            return "Sorry!We have a balckout."
        };
    
    };
}

// console.log(light(false, false))
console.log(light(false, true))
// console.log(light(true))

// ==========================================================================

// Wealther condition

let wealther = "";

if (wealther == "cloudy"){
    console.log("We will go picnic.");
}else{
    console.log("Better not to go outside.")
}

// ==========================================================================

// if else conditional statement

// PIZZA SHOP DISCOUNT AND PAYMENT METHOD

// MENU
const pizzaMenu = {
    seafood : 10000,
    chicken : 9500,
    cheese : 11000,
    coffee : 1500,
    juice : 2000,
}

const person = [];
let records = [];

function customer(yourNumber){
    let total = 0;
        function order(foodName, quantity, taxAmount = 3) {
            let cost = pizzaMenu[foodName] * quantity;
            let tax = cost * (taxAmount/100);
            let actualCost = cost + tax;
            const recordObj = {
                Name : pizzaMenu[foodName],
                Quantity : quantity,
                Tax : taxAmount,
                Total : actualCost,
            }
            records[records.length] = recordObj;
            
            total += actualCost;
        }
        // how many serves do you want 
        // just change the number
        order("seafood", 5); 
        order("chicken", 0);
        order("cheese", 0);
        order("coffee", 3);
        order("juice", 0)
        person[person.length] = records;
    
    records = [];
    console.log( discount (yourNumber, total));
    return total ;
    };

// Change your line number
// 1 to 20 first customer
const Total = customer(21) 

// Payment method 

function paymentMethod(input){
    if(input == "card"){
        return `You can use VISA card, Credit card and Master card`
    }else if(input == "online"){
        return `You can use KBZ pay, Wave Pay and online banking.`
    }else{
        return "Total : " + Total + " mmk"
    }
}

console.log(paymentMethod("card"));
// // console.log(paymentMethod("online"));
// // console.log(paymentMethod("cash"));

// New Pizza shop offers discounts to the customers 
// first 20 person can get 50% discount if you buy more than 20000 mmk 
// if you buy more than 50000 mmk, you can get 30% discount
// if you buy more than 30000 mmk, you can get 10% discount
// or else our discount exceed limit.

function discount(person,spendAmount){
    if (person <= 20 && spendAmount >= 20000) {
        return `Congratulation!! Welcome to our new pizza shop. You got 50% discount.
        Total : ${spendAmount - (spendAmount * 0.5)} mmk.`
    }else if (person > 20 && spendAmount >= 50000){
        return `You got 30% discount and hope you enjoy our pizza!!
        Total : ${spendAmount - (spendAmount * 0.3)} mmk.`
    }else if(person > 20 || spendAmount >= 30000){
        return `You got 10% discount.
        Total : ${spendAmount -(spendAmount * 0.1)} mmk.`
    }
}

// ==========================================================================

// Let's buy some snacks

let iHave = "";

if(iHave == "car"){
    console.log("I'll go shopping by car.");
}else if(iHave == "bicycle"){
    console.log("let's get some snacks by doing exercise.");
}else {
    console.log("let's use delivery services.")
}

// ==========================================================================

// adjust brightness depend upon battery percentage

let batteryPercent = 80;

if(batteryPercent >= 80) {
    console.log("You can adjust your brightness level.")
}else if(batteryPercent >= 30){
    console.log("Your brightness level is 50% now.")
}else {
    console.log("Your brightness level is 15% now.")
};

// ==========================================================================

// Subtitle

let sub = "english";

if (sub == "english") {
    console.log("English Subtitle")
}else if (sub == "japnese") {
    console.log("Japanese Subtitle")
}else {
    console.log("Myanmar Subtitle")
}





