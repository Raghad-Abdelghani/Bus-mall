"use Strict";

//getting the elements 

let FirstImageElement=document.getElementById('firstimage');

let MiddleImageElement=document.getElementById('middleimage');

let LastImageElement=document.getElementById('lastimage');


let maxAttempts=10;
let userAttemptsCounter=0;


// the random number index for the left image
let firstImageIndex; 

// the random number index for the middle image
let middleImageIndex;

//the random number index for the last image
let lastImageIndex


//making the constructor object

function Product(name, imgsource, timesShown){
    this.name=name;
    this.imgsource=imgsource;
    this.timesShown=timesShown;

    Product.allProducts.push(this)

}

Product.allProducts=[];

new Product('bag', 'img/assets/bag.jpg');
new Product('banana', 'img/assets/banana.jpg' );
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
new Product('sweep', 'img/assets/sweep.jpg');
new Product('tauntaun', 'img/assets/tauntaun.jpg');
new Product('unicorn', 'img/assets/unicorn.jpg');
new Product('usb', 'img/assets/usb.gif');
new Product('water-can', 'img/assets/water-can.jpg');
new Product('wine-glass', 'img/assets/wine-glass.jpg');



//generating random index

function generateRandomIndex() {
    
    return Math.floor(Math.random() *Product.allProducts.length); 
  }


  //render

  function renderThreeImages(){

  firstImageIndex=generateRandomIndex();
  
  middleImageIndex=generateRandomIndex();

  lastImageIndex=generateRandomIndex();

  while (firstImageIndex===middleImageIndex || middleImageIndex===lastImageIndex) {
    middleImageIndex=generateRandomIndex();
    
 while (firstImageIndex===lastImageIndex )
      lastImageIndex=generateRandomIndex();


firstImageElement.src=Product.allProducts[firstImageIndex].imgsource;

middleImageElement.src=Product.allProducts[middleImageIndex].imgsource;

lastImageIndex.src=Product.allProducts[lastImageIndex].imgsource;
}
  }

renderThreeImages();

