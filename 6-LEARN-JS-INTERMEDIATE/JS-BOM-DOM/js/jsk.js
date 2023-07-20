// const a = 5;
// const b = "Pyae";

// const af = () => {
//   const x = 10;
//   const y = 20;
//   const z = x + y;

//   return "this is af " + z;
// };

// function fs() {
//   const j = "jjj";
//   const k = "kkk";
//   return "this is fs " + j + k;
// }

// af();
// fs();

const p = new Promise((resolve, reject) => {
  if (false) {
    resolve("aung p");
  } else {
    reject("fail");
  }
});

console.log(p)

p.then((data) => console.log(data));
p.catch((data) => console.log(data));