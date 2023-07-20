// const obj = {
//   a: "aaa",
//   b: "bbb",
//   c: "ccc",
// };

// console.log(Object.keys(obj));
// // console.log(Object.values(obj));
// // const value = Object.values(obj);
// const value = Object.hasOwnProperty(obj.a);

// console.log(value);

// function sum(x, y,...nums) {
//     return nums.reduce((pv,cv) => pv+cv,0)
// }

// console.log(sum(1,2,3,6,7,4,9));

// const arr = [10, 20,34, 54, 12,342];
// console.log(arr[0]);
// console.log(arr[1]);

// const [a, b, ...x] = arr;

// console.log(a)
// console.log(b)

// console.log(x);

const obj = {
  a: "aaa",
  b: "bbb",
  c: "ccc",
};

const {a,b,c} = obj

console.log(a);
console.log(b);
console.log(c);
