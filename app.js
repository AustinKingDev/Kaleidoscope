const topLeftImage = document.getElementById("image0");
const topRightImage = document.getElementById("image1");
const bottomLeftImage = document.getElementById("image2");
const bottomRightImage = document.getElementById("image3");

const upBtn = document.getElementById("upBtn");
const rightBtn = document.getElementById("rightBtn");
const leftBtn = document.getElementById("leftBtn");
const downBtn = document.getElementById("downBtn");
console.log(upBtn)
console.log(topLeftImage.style.backgroundPositionY);

upBtn.addEventListener("click", function () {
   
    let topLeftY = window.getComputedStyle(topLeftImage).getPropertyValue("background-position-y");
    let addPixel = parseInt(topLeftY, 10) - 5 + "px";
    topLeftImage.style.backgroundPositionY = addPixel;

    let topRightY = window.getComputedStyle(topRightImage).getPropertyValue("background-position-y");
    let addPixel1 = parseInt(topLeftY, 10) - 5 + "px";
    topRightImage.style.backgroundPositionY = addPixel1;
 
    let bottomLeftY = window.getComputedStyle(bottomLeftImage).getPropertyValue("background-position-y");
    let addPixel2 = parseInt(bottomLeftY, 10) - 5 + "px";
    bottomLeftImage.style.backgroundPositionY = addPixel2;

    let bottomRightY = window.getComputedStyle(bottomRightImage).getPropertyValue("background-position-y");
    let addPixel3 = parseInt(bottomRightY, 10) - 5 + "px";
    bottomRightImage.style.backgroundPositionY = addPixel3;
  
});

downBtn.addEventListener("click", function () {
   
    let topLeftY = window.getComputedStyle(topLeftImage).getPropertyValue("background-position-y");
    let addPixel = parseInt(topLeftY, 10) + 5 + "px";
    topLeftImage.style.backgroundPositionY = addPixel;

    let topRightY = window.getComputedStyle(topRightImage).getPropertyValue("background-position-y");
    let addPixel1 = parseInt(topLeftY, 10) + 5 + "px";
    topRightImage.style.backgroundPositionY = addPixel1;
 
    let bottomLeftY = window.getComputedStyle(bottomLeftImage).getPropertyValue("background-position-y");
    let addPixel2 = parseInt(bottomLeftY, 10) + 5 + "px";
    bottomLeftImage.style.backgroundPositionY = addPixel2;

    let bottomRightY = window.getComputedStyle(bottomRightImage).getPropertyValue("background-position-y");
    let addPixel3 = parseInt(bottomRightY, 10) + 5 + "px";
    bottomRightImage.style.backgroundPositionY = addPixel3;
  
});

leftBtn.addEventListener("click", function () {
   
    let topLeftX = window.getComputedStyle(topLeftImage).getPropertyValue("background-position-x");
    let addPixel = parseInt(topLeftX, 10) - 5 + "px";
    topLeftImage.style.backgroundPositionX = addPixel;

    let topRightX = window.getComputedStyle(topRightImage).getPropertyValue("background-position-x");
    let addPixel1 = parseInt(topLeftX, 10) - 5 + "px";
    topRightImage.style.backgroundPositionX = addPixel1;
 
    let bottomLeftX = window.getComputedStyle(bottomLeftImage).getPropertyValue("background-position-x");
    let addPixel2 = parseInt(bottomLeftX, 10) - 5 + "px";
    bottomLeftImage.style.backgroundPositionX = addPixel2;

    let bottomRightX = window.getComputedStyle(bottomRightImage).getPropertyValue("background-position-x");
    let addPixel3 = parseInt(bottomRightX, 10) - 5 + "px";
    bottomRightImage.style.backgroundPositionX = addPixel3;
  
});

rightBtn.addEventListener("click", function () {
   
    let topLeftX = window.getComputedStyle(topLeftImage).getPropertyValue("background-position-x");
    let addPixel = parseInt(topLeftX, 10) + 5 + "px";
    topLeftImage.style.backgroundPositionX = addPixel;

    let topRightX = window.getComputedStyle(topRightImage).getPropertyValue("background-position-x");
    let addPixel1 = parseInt(topLeftX, 10) + 5 + "px";
    topRightImage.style.backgroundPositionX = addPixel1;
 
    let bottomLeftX = window.getComputedStyle(bottomLeftImage).getPropertyValue("background-position-x");
    let addPixel2 = parseInt(bottomLeftX, 10) + 5 + "px";
    bottomLeftImage.style.backgroundPositionX = addPixel2;

    let bottomRightX = window.getComputedStyle(bottomRightImage).getPropertyValue("background-position-x");
    let addPixel3 = parseInt(bottomRightX, 10) + 5 + "px";
    bottomRightImage.style.backgroundPositionX = addPixel3;
  
});


