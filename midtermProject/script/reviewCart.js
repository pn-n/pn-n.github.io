function displayCart() {
  const cart = document.getElementById("carts")
  cart.innerHTML = ""
  for(index=1; index <= 3; index++){
    const element = `
    <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="row featurette">
        <div class="col-md-6 order-md-2">
          <h2 class="mt-4">Item ${index}</h2>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div class="d-grid gap-2 d-md-block">
            <button class="btn" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
            </button>
            <button class="btn" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="col-md-3 order-md-1">
          <img src="../images/popularItems/popular${index}.jpg" class="img-fluid custom-image" alt="popular${index}">
        </div>
        <div class="col-md-2 order-md-3">
          <p class="pb-5 text-end">${index * 2000} THB</p>
        </div>
      </div>
    </div>
    <span class="badge bg-primary rounded-pill">${index + 2}</span>
  </li>
    `
    cart.innerHTML += element

  }

}

displayCart()
