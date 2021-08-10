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


  });


/*function chooseColor() {
    for (let i = 0; i < article.colors.length; i++) {
        document.getElementById("color_select").innerHTML +=
            `<option value="${article.colors[i]}">${article.colors[i]}</option>`
    }
    console.log(article.colors[i]);
};*/