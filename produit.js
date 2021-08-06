//let id = new URL(window.location).searchParams.get('id')
let id = window.location.hash.substring(1);
console.log(id)

fetch(`${"http://localhost:3000/api/teddies"}/${id}`)
    .then(response => response.json())
    .then(data => {
        article = data

        console.log(article);

        for (i = 0; i < article.colors.length; i++) {
            console.log(article.colors[i]);
        }
        document.querySelector(".produit").innerHTML +=
            `
    <div class="card col-md-11">
    <img class="card-img-top" src="${article.imageUrl}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${article.name}</h5>
    <p class="card-text">${article.description}</p>
    <p class="card-text">Prix : ${article.price/100} €</p>
    <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="colorSelect">Options</label>
    </div>
    <select class="custom-select" id="colorSelect">
      <option value="" selected>Choose...</option>
     </select>
  </div>
    <a href="product.html#" class="btn btn-primary">commander</a>
    </div>
       `
    })

//for (i = 0; i < article.colors.length; i++) {
//console.log(article.colors[i]);
//document.getElementById("card__colors").innerHTML +=
//`
//<select class="card__colors"> chaisise votre couler ${article.colors[i]}</select>
//<option value="${article.colors[i]}">${article.colors[i]}</option>
// `
//}