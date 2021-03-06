const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
  productsUl.textContent = '';
  products.forEach(product => {
    const li = document.createElement('li');

    const shipsToHTML = product.shipsTo.reduce((acc, country) => `<li>${acc}</li><li>${country}</li>`
    );

    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
    productsUl.appendChild(li);
  });
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


//Showing products that ships to country
const countrySelect = document.querySelector ('.country select');
countrySelect.addEventListener ('change', selectCountry)

function selectCountry () {
  const selectedCountry = countrySelect.value.toLowerCase ().trim ();
  const matchedCountry = products.filter (product => {
    for (let i = 0; i < product.shipsTo.length; i++) {
      return product.shipsTo[i].toLowerCase ().includes (selectedCountry);
    }
  })
  renderProducts (matchedCountry);
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









