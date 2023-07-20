const photoUpload = document.querySelector("#photoUpload");
const uploader = document.querySelector("#uploader");
const photos = document.querySelector("#photos");

const carouselBtn = document.querySelector("#carouselBtn");
const slideBox = document.querySelector("#slideBox");

const carouselSlideShow = (photoList) => {
  const id = "carousel" + Date.now();
  const carousel = document.createElement("div");
  carousel.className = "carousel slide";
  carousel.id = id;
  let slides = "";
  let indicator = "";
  photoList.forEach((photo, index) => {
    const active = index === 0 ? "active" : "";
    slides += `
    <div class="carousel-item ${active} bg-secondary " style="height: 500px;">
      <img src="${photo}" class="d-block h-100" alt="...">
    </div>
    `;
    indicator += `
    <button type="button" data-bs-target="#${id}" data-bs-slide-to="${index}" class=" ${active}" aria-label="Slide ${
      index + 1
    }"></button>
    `;
  });
  
  carousel.innerHTML = `
  <div class="carousel-indicators">
    ${indicator}
  </div>
  <div class="carousel-inner">
  ${slides}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  `;
  slideBox.append(carousel);
};

uploader.addEventListener("click", () => {
  photoUpload.click();
});

photoUpload.addEventListener("change", (event) => {
  console.log(event.target.files);
  [...event.target.files].forEach((file) => {
    const img = new Image();
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      console.log(event.target);
      img.src = event.target.result;
      img.classList.add("photo", "me-3");
      photos.append(img);
    });
    reader.readAsDataURL(file);
  });
});

carouselBtn.addEventListener("click", () => {
  const files = [...document.querySelectorAll(".photo")];
  console.log(files.map((el) => el.src));
  carouselSlideShow(files.map((el) => el.src));
});

uploader.addEventListener('dragover', event => {
  event.preventDefault()
} )

uploader.addEventListener("drop", event => {
  event.preventDefault()
  console.log(event.dataTransfer.files);
  [...event.dataTransfer.files].forEach((file) => {
    const img = new Image();
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      console.log(event.target);
      img.src = event.target.result;
      img.classList.add("photo", "me-3");
      photos.append(img);
    });
    reader.readAsDataURL(file);
  })
})
