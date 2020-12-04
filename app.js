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
    
    topLeftImage.style.transform += "translate(3px, 3px)";  
    topRightImage.style.transform += "translate(3px, 3px)";
    bottomLeftImage.style.transform += "translate(-3px, 3px)";
    bottomRightImage.style.transform += "translate(-3px, 3px)";

});


