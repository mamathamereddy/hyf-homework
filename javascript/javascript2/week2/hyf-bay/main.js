//Render products function
//const testProductNames=['Flat screen','mobile Phone','wallet','Books']*/

//Improving the renderProducts function
/*function getAvailableProducts() {
  return [{
      id: 23771823,
      name: 'Flat screen',
      price: 4000,
      rating: 4.2,
      shipsTo: ['Denmark', 'Germany']
     },
     {
      id: 23771824,
      name: 'Mobile Phones',
      price: 14000,
      rating: 4.6,
      shipsTo: ['Germany','Sweden','Norway','Denmark']
     },
     {
      id: 23771825,
      name: 'Wallets',
      price: 4000,
      rating: 4.2,
      shipsTo: ['Denmark']
     },
     {
      id: 23771825,
      name: 'Books',
      price: 4000,
      rating: 4.2,
      shipsTo: ['Denmark','U.K','U.S']
     }]
}*/
const products = getAvailableProducts();
console.log(products)


function renderProducts(products) {
 const ul = document.querySelector("section.products > ul");
 ul.innerHTML = '';
  for (let i = 0; i < products.length; i++) {
    const li = document.createElement("li");
    //li.innerHTML = `${products[i].name}| ${products[i].price} | ${products[i].rating} | ${products[i].shipsTo}`;
    ul.appendChild(li);

    //Showing more details to the user in a nice way!
    const subul = document.createElement('ul')
    li.appendChild(subul)

    const subli = document.createElement('li')
    subli.textContent = products[i].name
    subul.appendChild(subli)

    const subli1 = document.createElement('li')
    subli1.textContent = products[i].price
    subul.appendChild(subli1)

    const subli2 = document.createElement('li')
    subli2.textContent = products[i].rating
    subul.appendChild(subli2)

    const subli3 = document.createElement('li')
    subli3.classList.add('ships-to');
    //subli3.textContent = products[i].shipsTo
    subul.appendChild(subli3)

   //ships to rendering.
    const shipToul=document.createElement('ul');
    subli3.appendChild(shipToul)
    
    for(let j=0;j<products.length;j++){
      const shipToli=document.createElement('li')
      shipToli.textContent=products[i].shipsTo[j]
      shipToul.appendChild(shipToli)
    }
  }
}
renderProducts(products);

//Filter products
const searchInput = document.querySelector ('.search input')
searchInput.addEventListener ('input', filterForSearchInput)

function filterForSearchInput () {
  const searchProduct = searchInput.value.toLowerCase ().trim ();
  const matchedProducts = products.filter (product =>product.name.toLowerCase().includes(searchProduct));
  renderProducts (matchedProducts);
}


//Select sorting options
const sortOptions = document.querySelector ('.sort select');
sortOptions.addEventListener ('change', selectOption);

function selectOption () {
  if (sortOptions.value === 'cheap') {
   let  matchedProducts = products.sort ((a, b) => a.price - b.price);
    renderProducts (matchedProducts);
  } else if (sortOptions.value === 'name') {
    matchedProducts = products.sort ((a, b) => (a.name > b.name ? 1 : -1));
    renderProducts (matchedProducts);
  } else if (sortOptions.value === 'expensive') {
    matchedProducts = products.sort ((a, b) => b.price - a.price);
    renderProducts (matchedProducts);
  }
}



