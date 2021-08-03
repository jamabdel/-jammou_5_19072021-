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
    </div>
    
    `
  

    }
});

