// const el = document.getElementById('div-03');

// the closest ancestor with the id of "div-02"
// console.log(el.closest('#div-01')); // <div id="div-02">

// // the closest ancestor which is a div in a div
// console.log(el.closest('div div')); // <div id="div-03">

// // the closest ancestor which is a div and has a parent article
// console.log(el.closest("article > div")); // <div id="div-01">

// // the closest ancestor which is not a div
// console.log(el.closest(":not(div)")); // <article>

// const arr = ["a", "b", "c", "d", "e"];
// const obj = {
//   brand: "apple",
//   model: "macbook pro",
//   spec: { cpu: "i7", ram: "16GB", ssd: "1TB" },
// };
// const j = '["a", "b", "c", "d", "e"]';
// const j2 = `{
// "brand": "apple",
// "model": "macbook pro",
// "spec": { "cpu": "i7", "ram": "16GB", "ssd": "1TB" }
// }`;

// // console.log(typeof j)
// console.log(JSON.parse(j)[3])
// console.log(JSON.parse(j2).spec.ram)

// console.log(JSON.stringify(obj))

// const run = () => {
//   const req = new XMLHttpRequest();
//   // console.log(req)

//   req.open("GET", "https://fakestoreapi.com/products");
//   req.send();
//   req.addEventListener("load", (event) => {
//     console.log(event.target.responseText);
//     const data = JSON.parse(event.target.responseText);
//     console.log(data);
//   });
// };

// fetch("https://fakestoreapi.com/products")
//   .then((data) => data.json())
//   .then((json) => console.log(json));

// localStorage.setItem("name", "Pyae Sone Phone Myint")
// localStorage.setItem("age", 23)

// sessionStorage.setItem("nickName", "Eric")

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}
