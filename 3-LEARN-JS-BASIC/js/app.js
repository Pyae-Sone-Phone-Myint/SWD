// function inchesToFeet(input) {
//     let unitConvention = 1/12;
//     return input * unitConvention + " ft";

// }

// console.log(inchesToFeet(55));
// console.log(inchesToFeet(25));
// console.log(inchesToFeet(23));
// console.log(inchesToFeet(144));
// console.log(inchesToFeet(14));
// console.log(inchesToFeet(64));
// console.log(inchesToFeet(24));

// let fruits = ["orange","apple","banana","mango","kiwii"];
// let mySelf = [
//     "Pyae Sone Phone Myint",
//     22,
//     null,
//     ["html","css","js","figma"],
//     "developer",
//     false,
//     "North Okkalapa"
// ]

// console.log(`My name is ${mySelf[0]} and ${mySelf[1]} years old, lives in ${mySelf[6]}, expert at ${mySelf[3][2]}.`);

// let arr = [];

// arr[1] = "aaa";
// arr[0] = "ggg";
// arr[5] = "hhh";
// arr[7] = "iii";
// arr[9] = 20;

// console.log(typeof arr)
// console.log(arr)
// console.log(arr.length)

// let arr = [];

// arr[arr.length] = "aaa";
// arr[arr.length] = "bbb";
// arr[arr.length] = "ccc";
// arr[arr.length] = "ddd";

// console.log(arr);
// console.log(arr[arr.length-1]);
// console.log(arr[1]);

// let mySelf = {
//     myName: "Pyae Sone Phone Myint",
//     myAge: 22,
//     myJob: "Developer",
//     Skills: ["html", "css", "js"],
//     gf: null,
// }

// console.log(typeof mySelf)
// console.log(mySelf)
// console.log(mySelf.myName);
// console.log(mySelf.myJob);
// console.log(mySelf.Skills)
// console.log(mySelf.Skills[2])

// // -----------------

// console.log(mySelf["myAge"])

// let obj = {};

// obj.a = "aaa";
// obj.b = "bbb";
// obj["c"] = "ccc"


// console.log(typeof obj);
// console.log(obj);

// let name = "mg mg";
// let age = 15;
// let money = 200;
// money -= 50; // buy orange
// let canmgmgSmoke = false;
// let canmgmgFriendSmoke = true;
// let mgmgBag = ["mm", "eng", "bio" ,false];

// const mgmgObj = {
//     name: "mg mg",
//     age: 15,
//     money,
//     smoke: canmgmgSmoke,
//     bag: mgmgBag
// };

// const kyawkyawObj = {
//     name: "Kyaw Kyaw",
//     age: 16,
//     money: 500,
//     smoke: canmgmgFriendSmoke,
//     bag: ["mm"]
// }
// const myamyaObj = {
//     name: "Mya Mya",
//     age: 15,
//     money: 1000,
//     smoke: canmgmgFriendSmoke,
//     bag: ["mm", "eng", "math", "phys", "chem", "bio"]
// }

// console.log(mgmgObj);
// console.log(kyawkyawObj);
// console.log(myamyaObj);

// const students = [
//     {
//         name: "mg mg",
//         age: 15,
//         money,
//         smoke: canmgmgSmoke,
//         bag: mgmgBag
//     },
//     {
//         name: "Kyaw Kyaw",
//         age: 16,
//         money: 500,
//         smoke: canmgmgFriendSmoke,
//         bag: ["mm"]
//     },
//     {
//         name: "Mya Mya",
//         age: 15,
//         money: 1000,
//         smoke: canmgmgFriendSmoke,
//         bag: ["mm", "eng", "math", "phys", "chem", "bio"]
//     }
// ];

// console.log(students);
// console.log(students[1].name);
// console.log(students[2].bag[students[2].bag.length-1]);

// let num = 6;

// // num++
// // num++

// console.log(num++)
// console.log(num)

// let condition = true;

// console.log(!condition)

// let and = true && false; //have to both true
// let condition = false || true; //have to both false

// console.log(and)
// console.log(condition)

// let x = NaN;

// conditional expression
// console.log(x  ? true : false );

// let haveUfinishedDinner = false;

// console.log(haveUfinishedDinner ? "ထမင်းစားပြီးပါပြီ" : "မစားရသေးပါ")

// function run(text="nothing") {
//     return `this is ${text}`
// }

// console.log(run("something"))

// const run = function(text="another one") {
//     return `this is ${text}`;
// }

// console.log(run("hello"))



// IIFE (Immediately Invoked Function Expression)

// (function(){
//     let x = 4;
//     let y = 6;
//     console.log(x+y);
//     return x+y;
// })();

// console.log(`${(function(){return 6})() + 5}`)

// function book(number) {
//     return money(number) + " books"
// }

// function money(enoughMoney) {
//     return "Enough money for " + enoughMoney
// }

// console.log(book(6))

// console.log(obj())
// function obj(){
//     return "this is statement"
// }


// let ex = function() {
//     return "this is function expression "
// }

// console.log(ex())