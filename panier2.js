let Panier = JSON.parse(localStorage.getItem("Panier"));
console.table(Panier);



for (i = 0; i < Panier.length; i++) {

  document.getElementById("cart").innerHTML += `
    <section class="container content-section">
    
    <div class="cart-row">
        <span class="cart-item cart-header cart-column">Article</span>
        <span class="cart-price cart-header cart-column">Prix</span>
        <span class="cart-quantity cart-header cart-column">Quantité</span>
    </div>
    <div class="cart-items">
        <div class="cart-row">
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${Panier[i].image}" width="300" height="300">
                <button class="btn btn-danger" type="button">Supprimer l'article</button>
                <span class="cart-item-title">${Panier[i].name}</span>
            </div>
            <span class="cart-price cart-column">${Panier[i].price} €</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                
            </div>
        </div>
    </div>
    <div class="cart-total">
        <strong class="cart-total-title">Total</strong>
        <span class="cart-total-price">6.99€</span>
    </div>
    <button class="btn btn-primary btn-purchase" type="button">Acheter</button>
</section>
`
}


var removeCartItemButtons = document.getElementsByClassName('btn-danger')
for (var i = 0; i < removeCartItemButtons.length; i++) {
  var button = removeCartItemButtons[i]
  button.addEventListener('click', removeCartItem)


}

function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  //updateCartTotal()
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    var price = parseFloat(priceElement.innerText.replace('$', ''))
    var quantity = quantityElement.value
    total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}





document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

document.getElementById("form").innerHTML += `

<form>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationDefault01">Prénom</label>
      <input type="text" class="form-control" id="validationDefault01" placeholder="Prénom" value="Prénom" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefault02">Nom</label>
      <input type="text" class="form-control" id="validationDefault02" placeholder="Nom" value="Nom" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationDefaultUsername">e-mail</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend2">@</span>
        </div>
        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="e-mail" aria-describedby="inputGroupPrepend2" required>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">ville</label>
      <input type="text" class="form-control" id="validationDefault03" placeholder="ville" required>
    </div>
    
    <div class="col-md-3 mb-3">
      <label for="validationDefault05">Code postal</label>
      <input type="text" class="form-control" id="validationDefault05" placeholder="Code postal" required>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>

`