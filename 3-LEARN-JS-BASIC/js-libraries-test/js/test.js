// const moment = require("moment/moment");

// const arr = ["a", "b", "c", "d", "a", "b", "c", "d", "a", "b", "c", "d"];

// console.log(_.chunk((arr), 2));

// console.log(_.chunk(["a", "b", "c", "d"], 3));

// const m = moment();

// m.subtract(23, 'years');
// m.subtract(21, "days");
// console.log(m.format("D MMM Y"));

// axios("https://dummyjson.com/products/1").then((data) =>
//   console.log(data.data)
// );

// Swal.fire("Welcome to Friend Zone",
// "Function to display a SweetAlert2 popup, with an object of options, all being optional. See the SweetAlertOptions interface for the list of accepted fields and values.",
// "success"
// );

// const btn = document.querySelector("button");

// const run = () => {
//   Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       const Toast = Swal.mixin({
//         toast: true,
//         position: "top-end",
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//           toast.addEventListener("mouseenter", Swal.stopTimer);
//           toast.addEventListener("mouseleave", Swal.resumeTimer);
//         },
//       });

//       Toast.fire({
//         icon: "success",
//         title: "Signed in successfully",
//       });
//     }
//   });
// };

// btn.addEventListener("click", run);

// const ctx = document.getElementById("myChart");

// new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//       {
//         label: "Colors of Votes",
//         data: [12, 19, 3, 5, 2, 3],
//       },
//       {
//         label: "Animals of Votes",
//         data: [6, 7, 5, 8, 12, 9],
//       },
//     ],
//   },
// options: {
//   scales: {
//     y: {
//       beginAtZero: true
//     }
//   }
// }
// });

const tt = new Typed("#tt", {
  strings: ["Hello", "Welcome to Friend Zone", "Phon Shuu Lite"],
  typeSpeed: 100,
  loop: true,
  loopCount: 2,
  shuffle : true,
});
