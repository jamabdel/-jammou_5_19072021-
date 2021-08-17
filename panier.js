let teddy = JSON.parse(localStorage.getItem("Panier")) ? JSON.parse(localStorage.getItem("Panier")) : [];
console.table(teddy);

for (i = 0; i < teddy.length; i++) {
  var title = teddy[i].name
  var price = teddy[i].price
  var imageSrc = teddy[i].image
  var id = teddy[i].id
  var color = teddy[i].color
  addItemToCart(title, price, imageSrc, id, color)
  updateCartTotal()

}
console.log(id);

function addItemToCart(title, price, imageSrc, id, color) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title.color) {

      console.log(cartItemNames[i]);

      alert('Cet article est déjà ajouté au panier')
      return
    }
  }
  var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title},<br>${color}</span>
        </div>
        <span class="cart-price cart-column">${price} €</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">supprimer l'article </button>
        </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
// Retire un article du panier
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
for (var i = 0; i < removeCartItemButtons.length; i++) {
  var button = removeCartItemButtons[i]
  button.addEventListener('click', removeCartItem)
}

function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}
//Ajout quantité dans le panier
var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < quantityInputs.length; i++) {
  var input = quantityInputs[i]
  input.addEventListener('change', quantityChanged)
}
//Màj de la quantité dans le tableau

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateCartTotal()
}

//Màj du total dans le tableau
function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    var price = parseFloat(priceElement.innerText.replace('€', ''))
    var quantity = quantityElement.value
    total = total + (price * quantity)
  } //Calcul et affichage du prix total panier
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = total + ' €'


}

document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

function purchaseClicked() {
  alert('Thank you for your purchase')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}

document.getElementById("form").innerHTML += `
<div class="formulaire">
        <form class="container-fluid ">
            <div class="form-row">
                <div class="col-md-6 mb-3">
                    <label for="validationDefault01">Prénom</label>
                    <input type="text" class="form-control" id="validationDefault01" placeholder="Prénom" value="Prénom"
                        required />
                </div>
                <div class="col-md-6 mb-3">
                    <label for="validationDefault02">Nom</label>
                    <input type="text" class="form-control" id="validationDefault02" placeholder="Nom" value="Nom"
                        required />
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-12 mb-3">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
            </div>

            <div class="form-row ">

                <div class="col-md-6 mb-3">
                    <label for="validationDefault03">ville</label>
                    <input type="text" class="form-control" id="validationDefault03" placeholder="ville" required />
                </div>

                <div class="col-md-6 mb-3">
                    <label for="validationDefault05">Code postal</label>
                    <input type="number" class="form-control" id="validationDefault05" placeholder="Code postal"
                        required />
                </div>

            </div>
            <div class="col-md-12 mb-3">
                <label for="validationDefaultUsername">e-mail</label>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroupPrepend2">@</span>
                    </div>
                    <input type="email" class="form-control" id="validationDefaultUsername" placeholder="e-mail"
                        aria-describedby="inputGroupPrepend2" required />
                </div>
            </div>
    </div>
    <div class="form-group">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
            <label class="form-check-label" for="invalidCheck2">
            Accepter les termes et conditions
            </label>
        </div>
    </div>
    <button class="btn btn-primary" type="submit">envoyer le formulaire</button>
    </form>
    </div>
`


const email = document.getElementById('email');


form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {