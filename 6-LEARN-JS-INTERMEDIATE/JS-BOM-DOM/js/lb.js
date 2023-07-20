const createBtn = document.querySelector("#createBtn");
const textInput = document.querySelector("#textInput");
const lists = document.querySelector("#lists");
const total = document.querySelector("#total");
const doneTotal = document.querySelector("#doneTotal");

const data = ["Hi", "X tay buu lar", "morning", "good night"];
// Reuseable Function

const counter = () => {
  const totalCount = lists.childNodes.length;
  const doneTotalCount = [...lists.children].filter(
    (el) => el.querySelector(".form-check-input").checked === true
  ).length;
  total.innerText = totalCount;
  doneTotal.innerText = doneTotalCount;
};

const createLi = (text) => {
  const id = "Flexcheck" + Math.random();
  const li = document.createElement("li");
  // li.addEventListener("dblclick", edit);
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `
    <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="${id}"
                    onchange="done(event)"
                  />
                  <label class="form-check-label" for="${id}">
                    ${text}
                  </label>
                </div>
                <div class=" btn-group">
                <button class=" btn btn-outline-dark btn-sm edit-btn">
                  <i class=" bi bi-pencil pe-none"></i>
                </button>
                <button class=" btn btn-dark btn-sm del-btn">
                  <i class=" bi bi-trash3 pe-none"></i>
                </button>
                </div>
    `;

  return li;
};

// lists.append(createLi("apple"))
// lists.append(createLi("orange"))
// lists.append(createLi("mango"))

const addList = () => {
  //   console.dir(textInput.value);
  if (textInput.value.trim()) {
    lists.append(createLi(textInput.value));
    textInput.value = null;
    counter();
  } else {
    alert("Input Text is empty.");
  }
};

const del = (event) => {
  if (confirm("Are you sure to delete?")) {
    // console.log(event.target);
    event.target.closest("li").remove();
    counter();
  }
};

const done = (event) => {
  // console.log(event.target.nextElementSibling)
  event.target.nextElementSibling.classList.toggle(
    "text-decoration-line-through"
  );
  counter();
};

const edit = (event) => {
  const old = event.target.closest("li").querySelector(".form-check-label");
  // console.log(old);
  const newText = prompt("Input new Text", old.innerText);
  if (newText && newText.trim()) {
    old.innerText = newText;
  }
  counter();
};

data.forEach((d) => lists.append(createLi(d)));

// [...lists.children].forEach((li) => {
//   li.querySelector(".edit-btn").addEventListener("click", edit);
//   li.querySelector(".del-btn").addEventListener("click", del);
// });


lists.addEventListener("click", event => {
  console.log(event.target)

  // to delete using event
  if(event.target.classList.contains("del-btn")){
    // if (confirm("Are you sure to delete?")) {
    //   // console.log(event.target);
    //   event.target.closest("li").remove();
    //   counter();
    // }
    del(event)

    // to edit using event
  } else if (event.target.classList.contains("edit-btn")){
  //   const old = event.target.closest("li").querySelector(".form-check-label");
  // // console.log(old);
  // const newText = prompt("Input new Text", old.innerText);
  // if (newText && newText.trim()) {
  //   old.innerText = newText;
  // }
  // counter();
edit(event)

  }
})

createBtn.addEventListener("click", addList);

textInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    addList();
  }
});

window.addEventListener("load", counter);

// console.dir(textInput)

// console.log(Date.now())
