let id = window.location.hash.substring(1); //Récupérer la valeur après le hashtag (#) id 

fetch(`http://localhost:3000/api/teddies/${id}`) //Utilisation de FETCH pour récupérer les données pour chaque id 
    .then(res => res.json())
    .then(res => {
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
        // Boucle pour générer les couleurs disponibles en fonction de l'ourson choisit
        for (i = 0; i < res.colors.length; i++) {
            document.getElementById("color_Select").innerHTML += `<option value="${res.colors[i]}" selected>${res.colors[i]}</option>`
            console.log(res.colors[i]);
        }

        const ajoutAuPanier = document.getElementById(`ajoutAuPanier`);
        // Evènement pour écouter le clique sur le bouton ajoutAuPanier, qui va permettre l'envoi des options sélectionnées dans le local storage
        ajoutAuPanier.addEventListener('click', (event) => {
            const panier = JSON.parse(localStorage.getItem("Panier")) || []
            // Création d'un objet qui contient les options sélectionnées pour les envoyer dans le local storage
            panier.push({

                image: res.imageUrl,
                name: res.name,
                id: res._id,
                color: color_Select.value,
                description: res.description,
                price: res.price / 100,
            })
            localStorage.setItem("Panier", JSON.stringify(panier));
            alert("Article ajouté au panier !")
        })
    })
    .catch((error) => {
        alert("Erreur : " + error);
    });