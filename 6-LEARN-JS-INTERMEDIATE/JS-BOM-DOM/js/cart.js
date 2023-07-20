console.log(products);

const app = document.querySelector("#app");
const productCards = document.querySelector("#productCard");
// const productDetailModalBox = new bootstrap.Modal("#myModal")

const stars = (no) => {
  let star = "";
  for (let i = 1; i <= 5; i++) {
    if (i < Math.ceil(no)) {
      star += `<i class=" bi bi-star-fill"></i>`;
    } else {
      star += `<i class=" bi bi-star"></i>`;
    }
  }
  return star;
};

const createProductCards = (product) => {
  const div = document.createElement("div");
  div.setAttribute("product-id", product.id);
  div.className = "col-12 col-md-6 col-lg-4";
  div.innerHTML = `
            <div class="card">
              <div class="card-body">
                <img
                  class="product-card-img"
                  src="${product.thumbnail}"
                  alt=""
                />
                <div class=" d-flex justify-content-between align-items-end">
                    <div class="">
                        <h4 class="mb-0">${product.title}</h4>
                        <p class="badge bg-black">${product.category}</p>
                      </div>
                      <div class="">
                          ${stars(product.rating)}
                      </div>
                </div>
                <p class=" mt-3 text-black-50">${product.description}</p>

                <hr>

                <div class=" d-flex justify-content-between align-items-center">
                    <p class=" mb-0">$ ${product.price}</p>
                    <button class="btn btn-outline-dark">Add to Cart</button>
                </div>
              </div>
            </div>
    `;
  return div;
};

products.forEach((product) => {
  productCards.append(createProductCards(product));
});

app.addEventListener("click", (event) => {
  console.log(event.target) 
})
