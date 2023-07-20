// class Person {
//   name = "mg mg";
//   age = 23;
//   run() {
//     return "mg mg can run";
//   }
// }

// // console.log(Person)

// const person = new Person();

// console.log(person);

// console.log(person.name);
// console.log(person.age);
// console.log(person.run());

// class Student {
//   constructor(name, age, gneder, major) {
//     this.name = name;
//     this.age = age;
//     this.gender = gneder;
//     this.major = major;

//     // profit

//     this.pronoun = this.gender === "male" ? "he" : "she";
//     this.subjects = ["myan", "eng", "math", "chem", "phys", this.major];
//   }
//   learn() {
//     return this.name + " can learn " + this.subjects;
//   }

//   about() {
//     return `${this.name} is a student of MMSIT and ${this.pronoun} is ${
//       this.age
//     } year${this.age > 1 && "s"} old. Now ${this.pronoun} is learning ${
//       this.subjects
//     }.`;
//   }
// }

// class Monitor extends Student {
//   room = "Grade A";
// }

// const st4 = new Monitor("Aung Zaw", 16, "male", "bio");
// console.log(st4);

// const st = new Student("Mg Mg", 15, "male", "bio");
// console.log(st);
// console.log(st.learn());
// console.log(st.about());

// const st1 = new Student("Aye Aye", 16, "female", "eco");
// console.log(st1);
// console.log(st1.learn());

// const st1 = new Student();

// st1.name = "mg mg";
// st1.age = 16;
// st1.gender = "male";
// st1.major = "bio";

// st1.skill = function() {
//    return st1.name + " can swim and code."
// }

// console.log(st1);

// // console.log(st1.skill());

// const st2 = new Student();

// st2.name = "hla hla";
// st2.age = 15;
// st2.gender = "female";
// st2.major = "eco";

// st2.skill = function() {
//     return st2.name + " can cook very well and fluent in japanese."
// }

// console.log(st2)

// // console.log(st1.skill(), st2.skill());

// // Normal Obj

// const obj = {
//     name : "kyaw kyaw",
//     age : 14,
//     major : "bio",
//     gender : "male",
//     skill(){
//         return this.name + " can learn everything."
//     }
// }

// console.log(obj);

// class A {
//   a = "aaa";
//   b = "bbb";
// }

// class C extends A {
//   c = "ccc";
//   d = "ddd";
// }

// const c = new C();
// console.log(c);

// const d = new Date();

// d.setHours(d.getHours() + 300);
// d.setMonth(d.getMonth() + 4);
// d.setDate(d.getDate()+ 25);

// console.log(d);
// console.log(d.toDateString());
// console.log(d.toTimeString());
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());
// console.log(d.getMonth(),d.getDate(),d.getDay());
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getFullYear());

const str = new String("     min ga lar par       ");

// console.log(str);
// console.log(str.toUpperCase());
// console.log(str.concat(','));
// console.log(str.substring(4, 10));
// console.log(str.search('za'));
// console.log(str.replace('ga', 'za'));
// console.log(str.replaceAll('ar', "oo"));
// console.log(str.trim());
// console.log(str.trim().length);
// const num = '2484A53R3';
// console.log(num.padStart(16, "0"));
// console.log(num.padEnd(16,'0'));

// String to Array

// console.log(str.trim().split(' ',3));
// console.log(str.trim().split(' '));

const num = new Number(135.3567614);

// console.log(typeof(num));
// console.log(num);
// console.log(num.toString());
// console.log(num.toFixed(2));
// console.log(num.toPrecision(6));
// console.log(Number("124.45"));

// const numStr = 1234.343143;
// const weight = '75.45kg'
// console.log(parseInt(numStr));
// console.log(parseFloat(numStr));

// // can't write string infront of number
// console.log(parseInt(weight));
// console.log(parseFloat(weight));

// console.log(isNaN('buu'+ 'thee'));
// console.log(eval('3 + 4'));

// function run(x,y) {
//     return callback(x,y)
// }

// console.log(run(4,7 ));

// function callback(x,y){
//     return x * y;
// }

// const run = (x, y) => {
//         console.log(arguments);
//         return x + y};

// function run (x, y) {
//     console.log(arguments);
//     return x + y;
// }
// // console.log(run(4, 6));

// // const long = (x) => {
// //   return "this arrow function is " + x;
// // };

// // console.log(long(5));

// console.log(run.bind(null,2,4,5,6,3).call());

// console.dir(run)
