

// if(``){
//     console.log("a");
//     console.log("b");
//     console.log("c");
// }else {
//     console.log("This is false")
// }

function canICome(wakeUpTime){
    // let result;
    // if(wakeUpTime <= 9) {
    //    result = "အတန်းထဲဝင်ပါ။";
    // }else {
    //     result = "အတန်းထဲမဝင်ပါနဲ့။";
    // }
    // function's job has done when it returns
    if (wakeUpTime <= 9) {return "အတန်းထဲဝင်ပါ။";};

    return "အတန်းထဲမဝင်ပါနဲ့။";

};

console.log(canICome(9))
console.log(canICome(8.9))
console.log(canICome(9.5))
console.log(canICome(10))

let mark = 39;

if(mark >= 80) {
    console.log("D");
}else if(mark >= 40) {
    console.log("P");
}else {
    console.log("F")
}