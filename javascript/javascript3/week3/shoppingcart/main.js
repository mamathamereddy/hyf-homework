class Product {
  constructor (name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency (currency) {
    if (currency.toLowerCase () === 'dollars') {
      currency = this.price * 0.15;
      return currency;
    } else if (currency.toLowerCase () === 'euro') {
      currency = this.price * 0.13;
      return currency;
    } else if (currency.toLowerCase () === 'rupees') {
      currency = this.price * 10.51;
      return currency;
    }
    return this.price;
  }
}

class ShoppingCart {
  constructor (products) {
    this.products = products;
  }

  addProduct (product) {
    this.products.push (product);
    console.log ('Product Added');
  }

  removeProduct (product) {
    const matchedIndex = this.products.indexOf (product);

    if (matchedIndex > -1) {
      this.products.splice (matchedIndex, 1);
    }
    console.log ('Product deleted');
  }

  searchProduct (productName) {
    const searchedProduct = this.products.filter (product =>
      product.name.toLowerCase ().includes (productName.name.toLowerCase ())
    );
    console.log (searchedProduct);
    return searchedProduct;
  }

  getTotal () {
    const totalPrice = this.products.reduce (
      (acc, product) => acc + product.price,
      0
    );
    console.log ('totalPrice is:' + totalPrice);
    return totalPrice;
  }

  renderProducts () {
    const outputDiv = document.getElementById ('output');
    //outputDiv.innerHTML = '';
    const p = document.createElement ('p');
    p.textContent = `Your cart products list and prices`;
    outputDiv.appendChild (p);
    this.products.forEach (product => {
      const li = document.createElement ('li');
      li.innerHTML = `<div class="product">${product.name}</div><div class="price">${product.price} KR</div>`;
      p.appendChild (li);
    });
    const total = document.createElement ('h4');
    total.innerHTML = `Total price: ${this.getTotal ()} kr`;
    outputDiv.appendChild (total);
  }

  getUser () {
    fetch (' https://jsonplaceholder.typicode.com/users/1')
      .then (res => res.json ())
      //.then(data=>console.log(data.name))
      .then (user => {
        const outputDiv = document.getElementById ('output');
        const username = document.createElement ('h4');
        username.innerHTML = `Welcome :  ${user.username}`;
        outputDiv.appendChild (username);
      })
      .then (() => this.renderProducts ())
      .catch (err => console.log (err));
  }
}
const flatscreen = new Product ('flat-screen', 5000);
const Mobile = new Product ('Samsung-Gallaxy-x', 9000);
const lappi = new Product ('mac-pro', 9500);
const playStation = new Product ('PS4', 3500);
const smartWatch = new Product ('smartWatch', 4000);

const shoppingCart = new ShoppingCart ([flatscreen, smartWatch, Mobile, lappi]);

shoppingCart.addProduct (playStation);
shoppingCart.removeProduct (lappi);
shoppingCart.searchProduct (flatscreen);
shoppingCart.getTotal ();
shoppingCart.getUser ();
//shoppingCart.renderProducts();

// convert To currency from dkk
const plant = new Product ('plant', 50);
console.log (plant.convertToCurrency ('euro'));

