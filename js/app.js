document.addEventListener("DOMContentLoaded", () => {

  const search = document.querySelector('.search');
  const input = document.querySelector('.searchTerm');
  const button = document.querySelector('.searchButton');
  const minecraft = new Audio('asset/minecraft.mp3');
  const pop = new Audio('asset/pop.mp3');
  const tnt = new Audio('asset/tnt.mp3');
  const sound = document.querySelector('.fa-search');

  button.addEventListener('click', () => {
      search.classList.toggle('active');
      input.focus();
  })

  //des que j'ecris une lettre dans la barre de recherche le son pop se joue
  input.addEventListener('keyup', () => {
      pop.play();
  })

  //quand je clique sur sur le bouton jouer le son minecraft
  sound.addEventListener('click', () => {
      minecraft.play();
  })






  //product crée les produits dans un tableau
  const product = [
      {
      name : "Chaussure",
      price : 50,
      img : "asset/Chaussure.png",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      id : 1
      },
      {
      name : "Kayak",
      price : 150,
      img : "asset/produit2.png",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      id : 2
      },
      {
      name : "Lunette",
      price : 250,
      img : "asset/Lunette.webp",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      id : 3
      },
      {
      name : "Pantalon",
      price : 350,
      img : "asset/Pantalon.webp",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
      name : "Veste",
      price : 750,
      img : "asset/Veste.png",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      }

  ]

  //affiche les produits dans le DOM
  const productContainer = document.querySelector('.product');
  product.forEach((item) => {
      productContainer.innerHTML += `
      <div class="product__item">
          <img src="${item.img}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p>${item.price}€</p>
          <button class="btn" data-id="${item.id}">Ajouter au panier</button>
      </div>
      `
  })

   //quand je recherche un produit il s'affiche directement et les autres disparaissent
   input.addEventListener('keyup', () => {
    const searchValue = input.value.toLowerCase().trim();
    const filterProduct = product.filter((item) => {
        return item.name.toLowerCase().includes(searchValue);
    })
    productContainer.innerHTML = '';
    filterProduct.forEach((item) => {
        productContainer.innerHTML += `
        <div class="product__item">
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>${item.price}€</p>
            <button class="btn" data-id="${item.id}">Ajouter au panier</button>
        </div>
        `
    })
})

//quand je clique sur une image le son tnt se joue
const img = document.querySelectorAll('img');
img.forEach((item) => {
    item.addEventListener('click', () => {
        tnt.play();
    })
})

//quand je clique sur le texte ajouter au panier le son yahoo se joue
const yahoo = new Audio('asset/yahoo.mp3');
const btn = document.querySelectorAll('.btn');
btn.forEach((item) => {
    item.addEventListener('click', () => {
        yahoo.play();
    })
})



});


  