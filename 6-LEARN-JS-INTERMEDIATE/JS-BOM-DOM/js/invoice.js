// Variable

const services = [
  {
    id: 1,
    title: "Domain Service",
    price: 15,
  },
  {
    id: 2,
    title: "Hosting Service",
    price: 30,
  },
  {
    id: 3,
    title: "Web design Service",
    price: 150,
  },
  {
    id: 4,
    title: "Maintenance Service",
    price: 100,
  },
];

// Selector

const app = document.querySelector("#app");
const invoiceForm = document.querySelector("#invoiceForm");
const selectService = document.querySelector("#selectService");
const inputQuantity = document.querySelector("#inputQuantity");
const lists = document.querySelector("#lists");
const subTotal = document.querySelector("#subTotal");
const tax = document.querySelector("#tax");
const total = document.querySelector("#total");
const listTable = document.querySelector("#listTable");
const addServiceModalBtn = document.querySelector("#addServiceModalBtn");
const modalBox = document.querySelector("#modalBox");
const close = document.querySelector("#close");
const addServiceForm = document.querySelector("#addServiceForm");
const addServiceModal = new bootstrap.Modal("#addServiceModal");

// function

const createTr = (service, quantity) => {
  const tr = document.createElement("tr");
  tr.classList.add("list");
  tr.setAttribute("service-id", service.id);
  const total = service.price * quantity;
  tr.innerHTML = `
    <td class=" d-flex justify-content-between">${service.title}
    <div class="dropdown">
        
        <i class="bi bi-three-dots-vertical dropdown-icon" type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"></i>
      
        <ul class="dropdown-menu">
          <li><a class="dropdown-item del-btn" href="#">Delete</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </td>
    <td class="text-end list-quantity">${quantity}</td>
    <td class="text-end" >${service.price}</td>
    <td class="text-end list-total">${total}</td>
    `;

  return tr;
};

const findTax = (amount, percentage = 5) => {
  return (amount * percentage) / 100;
};

const findTotal = () => {
  const listTotal = document.querySelectorAll(".list-total");
  // let totalList = 0;
  // listTotal.forEach((el) => (totalList += parseFloat(el.innerText)));
  // console.log(totalList)

  const totalList = [...listTotal].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );
  subTotal.innerText = totalList;
  tax.innerText = findTax(totalList);
  total.innerText = totalList + findTax(totalList);
};

const showTable = () => {
  if (lists.children.length) {
    listTable.classList.remove("d-none");
    // console.log("hello")
  } else {
    listTable.classList.add("d-none");
  }
};

// Process(task)
// Service option loop

services.forEach(({ title, price }) =>
  selectService.append(new Option(title, price))
);

// data collect from form

invoiceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(
  //     selectService.value,
  //     selectService.options[selectService.selectedIndex].innerText,
  //     inputQuantity.valueAsNumber
  //   );

  // console.log(
  //   selectService.value,
  //   inputQuantity.valueAsNumber,
  //   services.find((service) => service.price == selectService.value)
  // );

  const selectedService = services.find(
    ({ price }) => price == selectService.value
  );

  const isExistedService = [...lists.children].find(
    (el) => el.getAttribute("service-id") == selectedService.id
  );

  if (isExistedService) {
    // console.log("Service has existed.");
    // console.log(isExistedService);
    const addQuantity = isExistedService.querySelector(".list-quantity");
    addQuantity.innerText =
      parseFloat(addQuantity.innerText) + inputQuantity.valueAsNumber;
    isExistedService.querySelector(".list-total").innerText =
      addQuantity.innerText * selectedService.price;
  } else {
    lists.append(createTr(selectedService, inputQuantity.valueAsNumber));
  }

  findTotal();

  showTable();

  invoiceForm.reset();
});

app.addEventListener("click", (event) => {
  const currentElement = event.target;
  // console.log(currentElement);
  if (currentElement.classList.contains("del-btn")) {
    currentElement.closest("tr").remove();
  }
  findTotal();
  showTable();
});

addServiceModalBtn.addEventListener("click", () => {
  // console.log("you can add");
  // modalBox.classList.remove("d-none");
  addServiceModal.show();
});

// close.addEventListener("click", () => {
//   modalBox.classList.add("d-none");
// });

addServiceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.dir(event.target);
  const formdata = new FormData(event.target);
  const serviceTitle = formdata.get("serviceTitle");
  const servicePrice = formdata.get("servicePrice");
  console.log(serviceTitle, servicePrice);

  const id = Date.now();

  services.push({
    id,
    title: serviceTitle,
    price: servicePrice,
  });

  selectService.append(new Option(serviceTitle, servicePrice));

  addServiceForm.reset();
  addServiceModal.hide();
});
