fetch('http://localhost:3000/api/teddies')
  .then(res => res.json())
  .then(res => {
    console.log(res)

    for (i = 0; i < res.length; i++) {
      console.log(res[i].name);

      document.querySelector(".cards").innerHTML +=
        `
    <div class="card">
    <h3>${res[i].name}</h3>
    <img src="${res[i].imageUrl}">
    <p>${res[i].description}</p>
    <p>Price : ${res[i].price/100} €</p>
    <a href="product.html#${res[i]._id}">Voir ce produit</a>
    </div>
    
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${response[i].imageUrl}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${res[i].name}</h5>
    <p class="card-text">${res[i].description}</p>
    <p class="card-text">Price :${res[i].price/100} €</p>
    <a href="product.html#${res[i]._id}" class="btn btn-primary">Voir ce produit</a>
    </div>
    
    `

    }

    for (let i of res) {
      console.log(i);
    }


    let choice = document.getElementById('.card__colors')
    for (i = 0; i < res.colors.length; i++) {
      let option = document.createElement('option')
      option.className = ".card__color"
      option.textContent = response.colors[i];
      choice.appendChild(option)

    }




  });


if (colors == "") {
  swal("Choissisez un coloris", "warning")
}