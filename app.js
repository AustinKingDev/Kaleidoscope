let topLeftImage = document.getElementById("image0");
let topRightImage = document.getElementById("image1");
let bottomLeftImage = document.getElementById("image2");
let bottomRightImage = document.getElementById("image3");
let usersImage = document.getElementById("userImage");

const upBtn = document.getElementById("upBtn");
const rightBtn = document.getElementById("rightBtn");
const leftBtn = document.getElementById("leftBtn");
const downBtn = document.getElementById("downBtn");
const enterBtn = document.getElementById("enterBtn");
const upLeftBtn = document.getElementById("upLeftBtn");
const upRightBtn = document.getElementById("upRightBtn");
const downLeftBtn = document.getElementById("downLeftBtn");
const downRightBtn = document.getElementById("downRightBtn");



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

upLeftBtn.addEventListener("click", function () {
   
    let topLeftY = window.getComputedStyle(topLeftImage).getPropertyValue("background-position-y");
    let topLeftX = window.getComputedStyle(topLeftImage).getPropertyValue("background-position-x");
    let addPixelY = parseInt(topLeftY, 10) - 5 + "px";
    let addPixelX = parseInt(topLeftX, 10) - 5 + "px";
    topLeftImage.style.backgroundPositionY = addPixelY;
    topLeftImage.style.backgroundPositionX = addPixelX;

    let topRightY = window.getComputedStyle(topRightImage).getPropertyValue("background-position-y");
    let topRightX = window.getComputedStyle(topRightImage).getPropertyValue("background-position-x");
    let addPixelY1 = parseInt(topRightY, 10) - 5 + "px";
    let addPixelX1 = parseInt(topRightX, 10) - 5 + "px";
    topRightImage.style.backgroundPositionY = addPixelY1;
    topRightImage.style.backgroundPositionX = addPixelX1;

    let bottomLeftY = window.getComputedStyle(bottomLeftImage).getPropertyValue("background-position-y");
    let bottomLeftX = window.getComputedStyle(bottomLeftImage).getPropertyValue("background-position-x");
    let addPixelY2 = parseInt(bottomLeftY, 10) - 5 + "px";
    let addPixelX2 = parseInt(bottomLeftX, 10) - 5 + "px";
    bottomLeftImage.style.backgroundPositionY = addPixelY2;
    bottomLeftImage.style.backgroundPositionX = addPixelX2;

    let bottomRightY = window.getComputedStyle(bottomRightImage).getPropertyValue("background-position-y");
    let bottomRightX = window.getComputedStyle(bottomRightImage).getPropertyValue("background-position-x");
    let addPixelY3 = parseInt(bottomRightY, 10) - 5 + "px";
    let addPixelX3 = parseInt(bottomRightX, 10) - 5 + "px";
    bottomRightImage.style.backgroundPositionY = addPixelY3;
    bottomRightImage.style.backgroundPositionX = addPixelX3;
  
});

upRightBtn.addEventListener("click", function () {
   
    let topLeftY = window.getComputedStyle(topLeftImage).getPropertyValue("background-position-y");
    let topLeftX = window.getComputedStyle(topLeftImage).getPropertyValue("background-position-x");
    let addPixelY = parseInt(topLeftY, 10) - 5 + "px";
    let addPixelX = parseInt(topLeftX, 10) + 5 + "px";
    topLeftImage.style.backgroundPositionY = addPixelY;
    topLeftImage.style.backgroundPositionX = addPixelX;

    let topRightY = window.getComputedStyle(topRightImage).getPropertyValue("background-position-y");
    let topRightX = window.getComputedStyle(topRightImage).getPropertyValue("background-position-x");
    let addPixelY1 = parseInt(topRightY, 10) - 5 + "px";
    let addPixelX1 = parseInt(topRightX, 10) + 5 + "px";
    topRightImage.style.backgroundPositionY = addPixelY1;
    topRightImage.style.backgroundPositionX = addPixelX1;

    let bottomLeftY = window.getComputedStyle(bottomLeftImage).getPropertyValue("background-position-y");
    let bottomLeftX = window.getComputedStyle(bottomLeftImage).getPropertyValue("background-position-x");
    let addPixelY2 = parseInt(bottomLeftY, 10) - 5 + "px";
    let addPixelX2 = parseInt(bottomLeftX, 10) + 5 + "px";
    bottomLeftImage.style.backgroundPositionY = addPixelY2;
    bottomLeftImage.style.backgroundPositionX = addPixelX2;

    let bottomRightY = window.getComputedStyle(bottomRightImage).getPropertyValue("background-position-y");
    let bottomRightX = window.getComputedStyle(bottomRightImage).getPropertyValue("background-position-x");
    let addPixelY3 = parseInt(bottomRightY, 10) - 5 + "px";
    let addPixelX3 = parseInt(bottomRightX, 10) + 5 + "px";
    bottomRightImage.style.backgroundPositionY = addPixelY3;
    bottomRightImage.style.backgroundPositionX = addPixelX3;
  
});

downLeftBtn.addEventListener("click", function () {
   
    let topLeftY = window.getComputedStyle(topLeftImage).getPropertyValue("background-position-y");
    let topLeftX = window.getComputedStyle(topLeftImage).getPropertyValue("background-position-x");
    let addPixelY = parseInt(topLeftY, 10) + 5 + "px";
    let addPixelX = parseInt(topLeftX, 10) - 5 + "px";
    topLeftImage.style.backgroundPositionY = addPixelY;
    topLeftImage.style.backgroundPositionX = addPixelX;

    let topRightY = window.getComputedStyle(topRightImage).getPropertyValue("background-position-y");
    let topRightX = window.getComputedStyle(topRightImage).getPropertyValue("background-position-x");
    let addPixelY1 = parseInt(topRightY, 10) + 5 + "px";
    let addPixelX1 = parseInt(topRightX, 10) - 5 + "px";
    topRightImage.style.backgroundPositionY = addPixelY1;
    topRightImage.style.backgroundPositionX = addPixelX1;

    let bottomLeftY = window.getComputedStyle(bottomLeftImage).getPropertyValue("background-position-y");
    let bottomLeftX = window.getComputedStyle(bottomLeftImage).getPropertyValue("background-position-x");
    let addPixelY2 = parseInt(bottomLeftY, 10) + 5 + "px";
    let addPixelX2 = parseInt(bottomLeftX, 10) - 5 + "px";
    bottomLeftImage.style.backgroundPositionY = addPixelY2;
    bottomLeftImage.style.backgroundPositionX = addPixelX2;

    let bottomRightY = window.getComputedStyle(bottomRightImage).getPropertyValue("background-position-y");
    let bottomRightX = window.getComputedStyle(bottomRightImage).getPropertyValue("background-position-x");
    let addPixelY3 = parseInt(bottomRightY, 10) + 5 + "px";
    let addPixelX3 = parseInt(bottomRightX, 10) - 5 + "px";
    bottomRightImage.style.backgroundPositionY = addPixelY3;
    bottomRightImage.style.backgroundPositionX = addPixelX3;
  
});

downRightBtn.addEventListener("click", function () {
   
    let topLeftY = window.getComputedStyle(topLeftImage).getPropertyValue("background-position-y");
    let topLeftX = window.getComputedStyle(topLeftImage).getPropertyValue("background-position-x");
    let addPixelY = parseInt(topLeftY, 10) + 5 + "px";
    let addPixelX = parseInt(topLeftX, 10) + 5 + "px";
    topLeftImage.style.backgroundPositionY = addPixelY;
    topLeftImage.style.backgroundPositionX = addPixelX;

    let topRightY = window.getComputedStyle(topRightImage).getPropertyValue("background-position-y");
    let topRightX = window.getComputedStyle(topRightImage).getPropertyValue("background-position-x");
    let addPixelY1 = parseInt(topRightY, 10) + 5 + "px";
    let addPixelX1 = parseInt(topRightX, 10) + 5 + "px";
    topRightImage.style.backgroundPositionY = addPixelY1;
    topRightImage.style.backgroundPositionX = addPixelX1;

    let bottomLeftY = window.getComputedStyle(bottomLeftImage).getPropertyValue("background-position-y");
    let bottomLeftX = window.getComputedStyle(bottomLeftImage).getPropertyValue("background-position-x");
    let addPixelY2 = parseInt(bottomLeftY, 10) + 5 + "px";
    let addPixelX2 = parseInt(bottomLeftX, 10) + 5 + "px";
    bottomLeftImage.style.backgroundPositionY = addPixelY2;
    bottomLeftImage.style.backgroundPositionX = addPixelX2;

    let bottomRightY = window.getComputedStyle(bottomRightImage).getPropertyValue("background-position-y");
    let bottomRightX = window.getComputedStyle(bottomRightImage).getPropertyValue("background-position-x");
    let addPixelY3 = parseInt(bottomRightY, 10) + 5 + "px";
    let addPixelX3 = parseInt(bottomRightX, 10) + 5 + "px";
    bottomRightImage.style.backgroundPositionY = addPixelY3;
    bottomRightImage.style.backgroundPositionX = addPixelX3;
  
});




usersImage.oninput = function()
{
    topLeftImage.style.backgroundImage = 'url(' + usersImage.value + ')';
    topRightImage.style.backgroundImage = 'url(' + usersImage.value + ')';
    bottomLeftImage.style.backgroundImage = 'url(' + usersImage.value + ')';
    bottomRightImage.style.backgroundImage = 'url(' + usersImage.value + ')';
};