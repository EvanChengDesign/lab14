'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
      this.allProducts.push(new Product(productNames[i]))
     }

}

AppState.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save product data to local storage
let allProductsJSON = JSON.stringify(this.allProducts);

localStorage.setItem('allProducts', allProductsJSON);

};

AppState.prototype.loadItems = function () {
  let allProductsJSON = localStorage.getItem('allProducts');

  if (allProductsJSON) {

    this.allProducts = JSON.parse(allProductsJSON)

  } else {
  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load

  this.instantiateProducts();

}}


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}