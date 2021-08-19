//let id = new URL(window.location).searchParams.get('id')
let id = window.location.hash.substring(1);
console.log(id)

fetch(`http://localhost:3000/api/teddies/${id}`)
    .then(res => res.json())
    .then(res => {

        console.log(res);

        document.querySelector(".produit").innerHTML +=
            `
            <div class="card col-md-11">
            <img class="card-img-top" src="${res.imageUrl}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${res.name}</h5>
                <p class="card-text">${res.description}</p>
                <p class="card-text">Prix : ${res.price/100} €</p>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="color_Select">Les différents coloris :</label>
                    </div>
                    <select class="custom-select" id="color_Select">
                        <option value="" selected>Choissisez un coloris</option>
                    </select>
                </div>
                <div>
                    <button id="ajoutAuPanier" class="btn btn-primary shop-item-button">Ajouter au panier</button>
                    <i class="fas fa-cart-plus"></i>
                </div>
            </div>
        </div>

    `




        for (i = 0; i < res.colors.length; i++) {
            document.getElementById("color_Select").innerHTML += `<option value="${res.colors[i]}" selected>${res.colors[i]}</option>`
            console.log(res.colors[i]);
        }

        //let coloris = document.querySelector('select').value;



        const ajoutAuPanier = document.getElementById(`ajoutAuPanier`);

        ajoutAuPanier.addEventListener('click', (event) => {
            const commande = {

                image: res.imageUrl,
                name: res.name,
                id: res._id,
                color: color_Select.value,
                description: res.description,
                price: res.price / 100,
            }
            let cart = localStorage.getItem("Panier");

            if (cart) {
                const order = JSON.parse(cart);
                addToLocalStorage(order, commande);
            } else {
                const order = [];
                addToLocalStorage(order, commande);


            }


        })



    });


function addToLocalStorage(order, commande) {
    order.push(commande);
    const commandeString = JSON.stringify(order);
    localStorage.setItem("Panier", commandeString);
    alert("Article ajouté au panier !")


}










/*function chooseColor() {
    for (let i = 0; i < res.colors.length; i++) {
        document.getElementById("color_select").innerHTML +=
            `<option value="${res.colors[i]}">${res.colors[i]}</option>`
    }
    console.log(res.colors[i]);
};

chooseColor()*/