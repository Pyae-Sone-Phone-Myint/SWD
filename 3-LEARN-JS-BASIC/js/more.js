// function canIPass(examMark, viperMark){
//     if(examMark >= 60 && viperMark >= 60){
//         return "You Pass."
//     }
//     return "You Fail."

// };

// console.log(canIPass(50, 60));
// console.log(canIPass(70, 65));
// console.log(canIPass(60, 55));

// function canICome(busNo){
//     if(busNo === 64 || busNo === 36 ){
//         return "You can come to North Okkalapa;"
//     }
//     return "You can't;"
// };

// console.log(canICome(36))
// console.log(canICome(112))
// console.log(canICome(64))

// conditional စစ်ချင်ရင်သုံး
// let a = "PSPM";
// console.log(a);
// a = !a;
// console.log(a);
// a = !a;
// console.log(a);
// a = !a;
// console.log(a);

let a = true;

a &&
  function () {
    console.log("hello");
    return true;
  } &&
  console.log("PSPM");

// function showMyName(name) {
//     if(typeof name === "string") {
//         return name
//     }
//     return false;
// }

// console.log(showMyName(22));
// console.log(showMyName("Pspm"));
// console.log(showMyName(['a', "b"]));
// console.log(showMyName({a: "a", b : "b"}));

function run(a, b, c) {
  console.log(arguments);
}

console.log(run("a", "b", "c"));
