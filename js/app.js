'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    this.allProducts.push(new Product(productNames[i]));
  }

}

AppState.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save product data to local storage

  let allProductsJSON = JSON.stringify(this.allProducts);  // variable to convert allProducts Array into JSON

  localStorage.setItem('allProducts', allProductsJSON); // command to set allProductsJSON into the local storage
}; 



AppState.prototype.loadItems = function () { // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load

let allProductsJSON = localStorage.getItem('allProducts'); // make attempt to load products from local storage

if (allProductsJSON) { // this checks if data was retrieved
  this.allProducts = JSON.parse(allProductsJSON) // pull from local storage if data exists 
  
} else {
  this.instantiateProducts(); // create new instances if data does not exist

}}


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
