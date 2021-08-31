fetch('http://localhost:3000/api/teddies')
  .then(res => res.json())
  .then(res => {
    console.log(res)


    //Boucle for qui permet la création de notre page


    for (i = 0; i < res.length; i++) {
      console.log(res[i].name);

      document.getElementById("cards").innerHTML +=
        `
   
    
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${res[i].imageUrl}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${res[i].name}</h5>
    <p class="card-text">${res[i].description}</p>
    <p class="card-text">Price :${res[i].price/100} €</p>
    <a href="product.html#${res[i]._id}" class="btn btn-primary">Voir ce produit</a>
  </div>
    </div>
    `

    }




  })