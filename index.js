fetch('http://localhost:3000/api/teddies') //Utilisation de l'API avec FETCH pour récupérer les données
  .then(res => res.json()) // Si réponse serveur ok, transforme les données en json
  .then(res => { // Promise pour les éléments reçus du server

    //Boucle for qui permet la création de notre page pour chaque produit (name, img, description, price)
    for (i = 0; i < res.length; i++) {

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
      //product.html# por récupérer la valeur après le hashtag (#) id
    }
  })
  .catch((error) => {
    alert("Erreur : " + error);
  });