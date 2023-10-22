const gerateProducts = () => {
  let arr = []
  for (i = 1; i <= 30; i++) {
    arr.push({ name: `Item${i}`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.` })
  }
  console.log('arr', arr)
  return arr
}

const productsPerPage = 6
let currentPage = 1

function displayProducts() {
  const productList = document.getElementById("product-list")
  const pagination = document.getElementById("pagination")

  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = currentPage * productsPerPage
  
  const products = gerateProducts()
  const currentProducts = products.slice(startIndex, endIndex)

  productList.innerHTML = ""
  currentProducts.forEach((product, index) => {
    const card = `
    <div class="col">
    <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
      <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
        <div class="image-container">
          <img src="../images/catalog/${product.name}.jpg" alt='item-${product.name}'>
          <div class="heart-icon">
            <button type="button" class="btn heart-toggle-button" data-bs-toggle="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
              </svg>
            </button>
          </div>
        <h4 class="pt-5 mt-1 mb-4 display-6 lh-1 fw-bold">${product.name}</h4>
        <p class="card-text">${product.description}</p>
        <ul class="d-flex list-unstyled mt-auto">

          <li class="me-auto">
            <button type="button" class="btn btn-outline-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
              <span style="margin-left: 10px;">Add Cart</span>
            </button>
          </li>
          <li class="d-flex align-items-center">
            <small>${(index+1) * 1000}฿</small>
          </li>
        </ul>
      </div>
    </div>
  </div> 
        `
    productList.innerHTML += card
  })

  pagination.innerHTML = ""
  const totalPages = Math.ceil(products.length / productsPerPage)
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li")
    li.className = `page-item ${i === currentPage ? "active" : ""}`
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`
    li.addEventListener("click", () => changePage(i))
    pagination.appendChild(li)
  }
}

function changePage(page) {
  currentPage = page
  displayProducts()
}

displayProducts()
