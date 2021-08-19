let teddy = JSON.parse(localStorage.getItem("Panier")) ? JSON.parse(localStorage.getItem("Panier")) : [];
console.table(teddy);

var total = 0





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
        <div class="cart-item cart-column row">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title},<br>${color}</span>
        </div>
        <span class="cart-price cart-column">${price} €</span>
        <div class="cart-quantity cart-column row">
            <input class="cart-quantity-input " type="number" value="1">
            <button class="btn btn-danger"><i class="fa fa-trash"></i></button>
            
        </div>
       

        `
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
// Retire un article du panier
/*function remove {
  localStorage.removeItem('teddy[i].id');
}*/

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


  if (total === 0) {
    document.getElementById("panier_vide").innerHTML = ` <h3 class="mb-4"> est vide...</h3><a href="index.html">Parcourez nos produits</a>`
    localStorage.clear();
  } else {
    document.getElementById("panier_vide").innerHTML = ` <h3 class="mb-4"> </h3>`

  }


}


document.getElementById("form").innerHTML += `
<div class="container">
<form id="form" class="form">
    <div class="form-control success error">
        <label for="firstName">Nom </label>
        <input type="text" placeholder="firstName" id="firstName" required />
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error message</small>
    </div>

    <div class="form-control success error">
        <label for="lastName">Prénom</label>
        <input type="text" placeholder="lastName" id="lastName" required />
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error message</small>
    </div>

    <div class="form-control success error">
        <label for="address">address</label>
        <input type="text" placeholder="address" id="address" required />
        <i class="fas fa-check-circle"></i>
        <i class="fas fa-exclamation-circle"></i>
        <small>Error message</small>
    </div>

    <form id="form" class="form">
        <div class="form-control success error">
            <label for="city">ville</label>
            <input type="text" placeholder="paris" id="city" required />
            <i class="fas fa-check-circle"></i>
            <i class="fas fa-exclamation-circle"></i>
            <small>Error message</small>
        </div>
        <div class="form-control success error">
            <label>Email</label>
            <input type="email" placeholder="a@florin-pop.com" id="email" required />
            <i class="fas fa-check-circle"></i>
            <i class="fas fa-exclamation-circle"></i>
            <small>Error message</small>
        </div>
        <button>Valider la commande</button>
    </form>
</div>
`
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const address = document.getElementById('address');
const city = document.getElementById('city');
const email = document.getElementById('email');
form.addEventListener('input', e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const firstNameValue = firstName.value.trim();
  const emailValue = email.value.trim();
  const lastNameValue = lastName.value.trim();
  const addressValue = address.value.trim();
  const cityValue = city.value.trim();

  if (firstNameValue === '') {

    setErrorFor(firstName, 'firstName cannot be blank');
  } else if (!regexText(firstNameValue)) {
    setErrorFor(firstName, 'Not a valid Name');
  } else {
    setSuccessFor(firstName);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!regexMail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

  if (lastNameValue === '') {
    setErrorFor(lastName, ' lastName cannot be blank');
  } else if (!regexText(lastNameValue)) {
    setErrorFor(lastName, 'Not a valid Name');
  } else {
    setSuccessFor(lastName);
  }

  if (addressValue === '') {
    setErrorFor(address, 'address cannot be blank');
  } else if (!regexAdress(addressValue)) {
    setErrorFor(address, 'Not a valid address');
  } else {
    setSuccessFor(address);
  }

  if (cityValue === '') {
    setErrorFor(city, 'city cannot be blank');
  } else if (!regexText(cityValue)) {
    setErrorFor(city, 'Not a valid city Name');
  } else {
    setSuccessFor(city);
  }


  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }

  function regexMail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function regexText(Text) {
    return /^[A-Za-z]{2,24}$/.test(Text);
  }

  function regexAdress(Adress) {
    return /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/.test(Adress);
  }
}

/*const email = document.getElementById('email');


form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {}*/