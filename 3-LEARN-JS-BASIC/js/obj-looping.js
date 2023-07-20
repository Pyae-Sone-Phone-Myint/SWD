// const fruits = ["Orange", "Apple", "Mango", "Banana", "Kiwi", "Lemon"]

// for (let i = 0; i < fruits.length; i++){
//     console.log(i , fruits[i])
// };

// Array အခန်းထုတ်ပေးတာ
// for (fruit of fruits) {
//     console.log(fruit)
// }

// obj ထဲက key ထုတ်ပေးတာ
// for (index in fruits) {
//     console.log(index, fruits[index])
// }

// const mgmgInfo = {
//     name : "Mg Mg",
//     age : 16,
//     job : "student",
// }

// for (key in mgmgInfo){
//     console.log(key,mgmgInfo[key])
// }

const ratings = [
  {
    id: 1,
    name: "Mg Mg",
    rate: 4,
  },
  {
    id: 2,
    name: "Zaw Zaw",
    rate: 2,
  },
  {
    id: 3,
    name: "Mya Mya",
    rate: 1,
  },
  {
    id: 4,
    name: "Hla Hla",
    rate: 5,
  },
  {
    id: 5,
    name: "Kyaw Kyaw",
    rate: 3,
  },
  {
    id: 6,
    name: "Mg Myo",
    rate: 1,
  },
];

for (rating of ratings) {
  // console.log(rating)
  for (key in rating) {
    console.log(key, rating[key]);
  }
  console.log("========");
}
