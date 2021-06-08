"use Strict";
console.log('Hello')
//getting the elements 
let container = document.getElementById('image-div');

let firstImageElement = document.getElementById('firstImage');

let middleImageElement = document.getElementById('middleImage');

let lastImageElement = document.getElementById('lastImage');


let maxAttempts = 25;
let userAttemptsCounter = 0;



// the random number index for the left image
let firstImageIndex;

// the random number index for the middle image
let middleImageIndex;

//the random number index for the last image
let lastImageIndex;

let productNames = [];
let votes = [];
let shown = [];

//making the constructor object

function Product(name, imgsource) {
  this.name = name;
  this.imgsource = imgsource;
  this.votes = 0;
  this.shown = 0;

  Product.allProducts.push(this)

  productNames.push(this.name)

}

Product.allProducts = [];

new Product('bag', 'img/assets/bag.jpg');
new Product('banana', 'img/assets/banana.jpg');
new Product('bathroom', 'img/assets/bathroom.jpg');
new Product('boots', 'img/assets/boots.jpg');
new Product('breakfast', 'img/assets/breakfast.jpg');
new Product('bubblegum', 'img/assets/bubblegum.jpg');
new Product('chair', 'img/assets/chair.jpg');
new Product('cthulhu', 'img/assets/cthulhu.jpg');
new Product('dog-duck', 'img/assets/dog-duck.jpg');
new Product('dragon', 'img/assets/dragon.jpg');
new Product('pen', 'img/assets/pen.jpg');
new Product('pet-sweep', 'img/assets/pet-sweep.jpg');
new Product('scissors', 'img/assets/scissors.jpg');
new Product('shark', 'img/assets/shark.jpg');
new Product('sweep', 'img/assets/sweep.png');
new Product('tauntaun', 'img/assets/tauntaun.jpg');
new Product('unicorn', 'img/assets/unicorn.jpg');
new Product('usb', 'img/assets/usb.gif');
new Product('water-can', 'img/assets/water-can.jpg');
new Product('wine-glass', 'img/assets/wine-glass.jpg');



//generating random index

function generateRandomIndex() {

  return Math.floor(Math.random() * Product.allProducts.length);
}


//render

function renderThreeImages() {


  firstImageIndex = generateRandomIndex();

  middleImageIndex = generateRandomIndex();

  lastImageIndex = generateRandomIndex();

  while (firstImageIndex === middleImageIndex || middleImageIndex === lastImageIndex || firstImageIndex === lastImageIndex) {
    middleImageIndex = generateRandomIndex();
    lastImageIndex = generateRandomIndex();

  }


  firstImageElement.src = Product.allProducts[firstImageIndex].imgsource;
  Product.allProducts[firstImageIndex].shown++;

  middleImageElement.src = Product.allProducts[middleImageIndex].imgsource;
  Product.allProducts[middleImageIndex].shown++;

  lastImageElement.src = Product.allProducts[lastImageIndex].imgsource;
  Product.allProducts[lastImageIndex].shown++;

}

renderThreeImages();


container.addEventListener('click', handleUserClick);

function handleUserClick(event) {

  userAttemptsCounter++
  
  if (userAttemptsCounter <= maxAttempts) {


    if (event.target.id === 'firstImage') {

      Product.allProducts[firstImageIndex].votes++

      renderThreeImages();

    } else if (event.target.id === 'middleImage') {
      Product.allProducts[middleImageIndex].votes++;
      renderThreeImages();
    }
    else if (event.target.id === 'lastImage') {
      Product.allProducts[lastImageIndex].votes++

      renderThreeImages();

    } else {
      alert('please click on the images');
      userAttemptsCounter--;
    }

  }


  else {
    let button = document.getElementById('button');
    button.hidden = false;
    button.addEventListener('click', showingList);
  

    container.removeEventListener('click', handleUserClick);
    console.log(Product.allProducts);

    for (let i = 0; i < Product.allProducts.length; i++) {

      votes.push(Product.allProducts[i].votes);
      shown.push(Product.allProducts[i].shown);
    }

    function showingList() {
      let list = document.getElementById('results-list');
      for (let i = 0; i < Product.allProducts.length; i++) {
        let productResult = document.createElement('li');

        list.append(productResult);

        productResult.textContent = `${Product.allProducts[i].name} has ${Product.allProducts[i].votes} votes and was seen ${Product.allProducts[i].shown}`;

      }

      button.hidden = true;
    }

  }






}


