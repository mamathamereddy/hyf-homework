/*-------js2-------week1-------------------homework------*/
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

/*------js2----week2 homework----------------*/ 
//Filter products
const searchInput = document.querySelector('.search input')
searchInput.addEventListener('input', filterForSearchInput)

function filterForSearchInput() {
  const searchProduct = searchInput.value.toLowerCase().trim();
  const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchProduct));
  renderProducts(matchedProducts);
}


//Select sorting options
const sortOptions = document.querySelector('.sort select');
sortOptions.addEventListener('change', selectOption);

function selectOption() {
  if (sortOptions.value === 'cheap') {
    let matchedProducts = products.sort((a, b) => a.price - b.price);
    renderProducts(matchedProducts);
  } else if (sortOptions.value === 'name') {
    matchedProducts = products.sort((a, b) => (a.name > b.name ? 1 : -1));
    renderProducts(matchedProducts);
  } else if (sortOptions.value === 'expensive') {
    matchedProducts = products.sort((a, b) => b.price - a.price);
    renderProducts(matchedProducts);
  }
}


//Showing products that ships to country
let countrySelect = document.querySelector(".country select");
countrySelect.addEventListener("change", function () {
    let selectedCountry = countrySelect.value.toUpperCase();
    let selectByCountry = products.filter((product) => {
        for (let i = 0; i < product.shipsTo.length; i++) {
            return product.shipsTo[i].toUpperCase().includes(selectedCountry);
        }
    });
    renderProducts(selectByCountry);
})


/*--------js2------week3 homework-------------------*/

// send the prices of the products to a server
const prices = products.map(product => {
  return product.price;
});
sendPricesToServer(prices, serverResponse => {
  console.log(serverResponse);
});
