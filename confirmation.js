let teddyConf = JSON.parse(localStorage.getItem("order"));

let products = (localStorage.getItem("products"));

productsf = teddyConf.products;
let totalPrice = getCost(productsf);

function getCost(items) { // Additionner toutes les valeurs Price du tableau productsf 
    return items.reduce(function (total, obj) { // total de tous les prix dans l'ojet product
        return total + obj.price;
    }, 0);
}

document.getElementById("no_command").innerHTML += `
<div class="cardc text-center col-md-10 mw-100">
<h5 class="card-title">Bonjour ${teddyConf.contact.lastName}  ${teddyConf.contact.firstName}</h5>
<h5>Votre commande a bien été enregistrée</h5><br /><br />
<div class="text-center  text-primary mb-4 font-weight-bold">Vous trouverez ci-dessous le numero de commande :</div>
<div class="text-center  text-primary mb-4 font-weight-bold">N°${localStorage.orderId}</div>
<div class="text-center  text-primary mb-4 font-weight-bold border border-danger">Le montant de votre commande est de : ${totalPrice  / 100} € </div>
<div class="text-center"><a href="index.html" class=" btn btn-primary">Retourner à l'accueil</a></div>
</div>
`