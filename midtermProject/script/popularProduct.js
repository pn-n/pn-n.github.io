const gerateProducts = () => {
  let arr = []
  for (i = 1; i <= 3; i++) {
    arr.push({ name: `Product ${i}` })
  }
  return arr
}

const gerateProducts2 = () => {
  let arr = []
  for (i = 4; i <= 6; i++) {
    arr.push({ name: `Product ${i}` })
  }
  return arr
}

function displayPopularProducts2() {
  const popularProduct = document.getElementById("popular-product2")
  const products = gerateProducts2()
  popularProduct.innerHTML = ""
  products.forEach((product, index) => {
    const element = `
    <div class="col-md-4">
    <div class="card" style="width: 18rem;">
      <div class="image-container">
        <img src="../images/popularItems/popular${index + 4}.jpg" alt="...">
        <div class="heart-icon">
          <button type="button" class="btn heart-toggle-button" data-bs-toggle="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="container text-left">
          <div class="row">
            <div class="col-10 d-flex align-items-center">
              <p class="card-text">${product.name}</p>
            </div>
            <div class="col-2 d-flex align-items-center">
            <button type="button" class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
          </svg>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
    popularProduct.innerHTML += element
  })
}

function displayPopularProducts() {
  const popularProduct = document.getElementById("popular-product")
  const products = gerateProducts()
  popularProduct.innerHTML = ""
  products.forEach((product, index) => {
    const element = `
    <div class="col-md-4">
        <div class="card" style="width: 18rem;">
          <div class="image-container">
            <img src="../images/popularItems/popular${index + 1}.jpg" alt="...">
            <div class="heart-icon">
              <button type="button" class="btn heart-toggle-button" data-bs-toggle="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="card-body">
            <div class="container text-left">
              <div class="row">
                <div class="col-10 d-flex align-items-center">
                  <p class="card-text">${product.name}</p>
                </div>
                <div class="col-2 d-flex align-items-center">
                <button type="button" class="btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
    popularProduct.innerHTML += element
  })
}

displayPopularProducts()
displayPopularProducts2()
