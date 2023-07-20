// const h1 = document.getElementsByTagName('h1')[0];

// console.log(h1.title)
// console.log(h1.style.color);
// console.log(h1.innerText);

const btn = document.querySelector("#btn");

const showAlert = (event,text) => alert(text)

// btn.onclick = showAlert;


btn.addEventListener('click', showAlert.bind(null, event,"min ga lar par"))