// remove duplicate elements

const arr = ["a", "b", "c", "d", "a", "e", "b"];

const result = arr.filter((item, index) => arr.indexOf(item) === index);

console.log(result);
