;(() => {
  const toggleShippingAddressCheckbox = document.getElementById(
    "toggleShippingAddress"
  )
  const shippingAddressSection = document.getElementById("shippingAddressSection")

  toggleShippingAddressCheckbox.addEventListener("change", function () {
    shippingAddressSection.style.display = this.checked ? "none" : "block"
  })
  shippingAddressSection.innerHTML = `
  <div class="col-sm-6">
                    <label for="firstName" class="form-label">First name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
      
                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
      
                  <div class="col-12">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">
                    <div class="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
      
                  <div class="col-12">
                    <label for="address2" class="form-label">Address 2 <span class="text-body-secondary">(Optional)</span></label>
                    <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
                  </div>
      
                  <div class="col-md-5">
                    <label for="country" class="form-label">Country</label>
                    <select class="form-select" id="country" required="">
                      <option value="">Choose...</option>
                      <option>Thailand</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
      
                  <div class="col-md-4">
                    <label for="state" class="form-label">Province</label>
                    <select class="form-select" id="state" required="">
                      <option value="">Choose...</option>
                      <option>Bangkok</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
      
                  <div class="col-md-3">
                    <label for="zip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="zip" placeholder="" required="">
                    <div class="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
`
})()