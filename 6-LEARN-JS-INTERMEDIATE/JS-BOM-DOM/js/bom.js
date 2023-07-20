// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.outerWidth);
// console.log(window.outerHeight);

// window.addEventListener("scroll", () => {
//   console.log(window.scrollY);
// });

// window.addEventListener("resize", () => {
//     console.log(window.innerWidth)
//     console.log(window.innerHeight)
// })

// window.addEventListener("online", () => {
//     console.log("you are online")
// })

// window.addEventListener("offline", () => {
//     console.log("you are offline")
// })

// x = 100;
// y= 200;

const clockStart = document.querySelector("#start");
const clockStop = document.querySelector("#stop");
// const clock = document.querySelector("#clock");

// const run = () => {
//   //   console.log("I am running");
//   const d = new Date();

//   console.log(d.getHours(), ":", d.getMinutes(), ":", d.getSeconds());
//   clock.innerText = d.getHours() +":"+ d.getMinutes()+ ":"+ d.getSeconds();
// };

// setTimeout(run, 3000);

// setInterval(run, 1000)

let run;

// clockStart.addEventListener("click", () => {
//   run = setTimeout(() => {
//     console.log("hello");
//   }, 3000);
// });

// clockStop.addEventListener("click", () => {
//   clearTimeout(run);
// });


// let i = 0;

// setInterval(() => {
//     console.log("hello", ++i)
// }, 1000);

clockStart.addEventListener("click", () => {
    scrollTo(0, document.querySelector("#to").getBoundingClientRect().y)
})