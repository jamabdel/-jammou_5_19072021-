let teddyConf = JSON.parse(localStorage.getItem("order"));
console.log(teddyConf);





//localStorage.setItem("order", JSON.stringify(data));
document.getElementById("no_command").innerHTML += `
<div class="cardc text-center col-md-10 mw-100">

<h5 class="card-title">Bonjour ${teddyConf.contact.lastName}  ${teddyConf.contact.firstName}</h5>
<h5>Votre commande a bien été enregistrée, Vérifiez votre boîte e-mail!</h5><br /><br />

<div class="text-center  text-primary mb-4 font-weight-bold">Vous trouverez ci-dessous le numero de commande :</div>
<div class="text-center  text-primary mb-4 font-weight-bold">N°${localStorage.orderId}</div>
<div class="text-center  text-primary mb-4 font-weight-bold border border-danger">Le montant de votre commande est de : ${sessionStorage.totalPrice}€</div>
<div class="text-center">
                <a href="index.html" class=" btn btn-primary">Retourner à l'accueil</a>
            </div>

</div>
`