(() => {
  const navbar = document.getElementById("default-nav-bar")
  navbar.innerHTML = `
  <div class="container-fluid" style="background-color:#E8E6E0;>
  <a class="navbar-brand" href='#'> <img src="../images/capsule-logo.png" alt="logo" width="90" height="90"> 
    <span class="custom-font-nav-bar">CAPSULE</span>
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse"">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="../src/home.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">What's new</a>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
        Products
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="productCatalog.html">View All</a></li>
          <li><a class="dropdown-item" href="#">Tops</a></li>
          <li><a class="dropdown-item" href="#">Trouser</a></li>
          <li><a class="dropdown-item" href="#">Dresses</a></li>
          <li><a class="dropdown-item" href="#">Accessories</a></li>
          <li><hr class="dropdown-divider"/></li>
          <li>
            <a class="dropdown-item" href="#">Special Collection</a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sale</a>
      </li>
    </ul>
    <form class="d-flex cart-icon" role="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
    <div class="cart-icon">
      <a href="cart.html" style="color: black;">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
    </svg>
      </a>
    </div>
  </div>
</div>`
})()