// selection

const result = document.getElementById("result");
const store = document.getElementById("store");
const clear = document.getElementById("clear");
const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const calculate = document.getElementById("calculate");
const list = document.getElementById("list");

calculate.onclick = () => {
    // console.dir(width.value)
  const area = width.valueAsNumber * breadth.valueAsNumber;
  result.innerText = `W : ${width.valueAsNumber} ft * B : ${breadth.valueAsNumber} ft = ${area} sqft`;
  breadth.value = width.value = null;
};

clear.onclick = () => {
  result.innerText = null;
  list.innerHTML = null;
};

store.onclick = () => {
    list.innerHTML += `<li>${result.innerText}</li>`
}

window.addEventListener("keydown", event => {
  console.log(event)
})
