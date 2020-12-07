import _ from 'lodash';
import html2canvas from 'html2canvas';
import {toDataURL} from "./unsplash";
import {loadrndimage} from "./unsplash";
import keyboardKey from "keyboard-key";

let topLeftImage = document.getElementById("image0");
let topRightImage = document.getElementById("image1");
let bottomLeftImage = document.getElementById("image2");
let bottomRightImage = document.getElementById("image3");
let usersImage = document.getElementById("userImage");

let rndimg = document.getElementById("rndimg");
let userAttribution = document.getElementById("imgAttribution");

// ui toggle
let ui = document.getElementById("ui");
let uitoggle = document.getElementById("uitoggle");

const upBtn = document.getElementById("upBtn");
const rightBtn = document.getElementById("rightBtn");
const leftBtn = document.getElementById("leftBtn");
const downBtn = document.getElementById("downBtn");
const upLeftBtn = document.getElementById("upLeftBtn");
const upRightBtn = document.getElementById("upRightBtn");
const downLeftBtn = document.getElementById("downLeftBtn");
const downRightBtn = document.getElementById("downRightBtn");
const shuffleBtn = document.getElementById("shuffleBtn");

let downloadbutton = document.getElementById("download");
let closepreview = document.getElementById("closepreview");
let previewcontainer = document.getElementById("previewcontainer");


window.addEventListener("load", function () {

    function genimage() {
        // creates a canvas base of the capture id div
        html2canvas(
            document.getElementById("capture"))
            .then(canvas => {
                // we empty the preview div
                document.getElementById("preview").innerHTML = '';

                // We generate the base64 image
                var imgaeData = canvas.toDataURL("image/png");
                var newData = imgaeData.replace(/^data:image\/png/, "data:application/octet-stream");

                // i kind want this to work maybe later 
                // downloadbutton.setAttribute("download", "image.png")
                // downloadbutton.setAttribute("href", newData);

                // we add the image as a child div to the preview div
                document.getElementById("preview").append(canvas);
            });
    }

    // when click we trigger the genimage function
    downloadbutton.addEventListener("click", function () {
        previewcontainer.classList.toggle("hidden");
        genimage();
    });
    // close the image prview
    closepreview.addEventListener("click", function () {
        previewcontainer.classList.toggle("hidden");
        document.getElementById("preview").innerHTML = '';
        
    });
});

// UI Code
uitoggle.addEventListener("click", function () {
    ui.classList.toggle("hidden");
});

rndimg.addEventListener("click", function () {
    loadrndimage(userAttribution,topLeftImage,topRightImage,bottomLeftImage,bottomRightImage);
});

document.addEventListener('keydown', event => {
    // console.log('object :>> ', keyboardKey);
    const key = keyboardKey.getKey(event);
   
    switch (key) {
        case 'q':
            upLeftFunc();
        break
        case 'w':
            upFunc();
        break
        case 'e':
            upRightFunc();
        break

        case 'a':
            leftFunc();
        break
        case 'd':
            rightFunc();
        break

        case 'z':
           downLeftFunc();
        break
        case 's':
           downFunc();
        break
        case 'c':
            downRightFunc();
        break
            
      default:
        break
    }
  });


function upFunc() {
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

}



upBtn.addEventListener("click", function () {
    holdit(upBtn, upFunc, 1000, 3)

});

function downFunc() {

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
}

downBtn.addEventListener("click", function () {
    holdit(downBtn, downFunc, 1000, 3)
});

function leftFunc() {
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
}

leftBtn.addEventListener("click", function () {
    holdit(leftBtn, leftFunc, 1000, 3)
});

function rightFunc() {

    let topLeftX = window.getComputedStyle(topLeftImage).getPropertyValue("background-position-x");
    let addPixel = parseInt(topLeftX, 10) + 5 + "px";
    topLeftImage.style.backgroundPositionX = addPixel;

    let topRightX = window.getComputedStyle(topRightImage).getPropertyValue("background-position-x");
    let addPixel1 = parseInt(topRightX, 10) + 5 + "px";
    topRightImage.style.backgroundPositionX = addPixel1;

    let bottomLeftX = window.getComputedStyle(bottomLeftImage).getPropertyValue("background-position-x");
    let addPixel2 = parseInt(bottomLeftX, 10) + 5 + "px";
    bottomLeftImage.style.backgroundPositionX = addPixel2;

    let bottomRightX = window.getComputedStyle(bottomRightImage).getPropertyValue("background-position-x");
    let addPixel3 = parseInt(bottomRightX, 10) + 5 + "px";
    bottomRightImage.style.backgroundPositionX = addPixel3;
}

rightBtn.addEventListener("click", function () {
    holdit(rightBtn, rightFunc, 1000, 3)
});



function upLeftFunc() {

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
}

upLeftBtn.addEventListener("click", function () {
    holdit(upLeftBtn, upLeftFunc, 1000, 3)
});


function upRightFunc() {

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
}

upRightBtn.addEventListener("click", function () {
    holdit(upRightBtn, upRightFunc, 1000, 3)
});

function downLeftFunc() {

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
}

downLeftBtn.addEventListener("click", function downLeftFunc() {
    holdit(downLeftBtn, DownLeftFunc, 1000, 3)
});

function downRightFunc() {

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
}

downRightBtn.addEventListener("click", function () {
    holdit(downRightBtn, downRightFunc, 1000, 3)
});

shuffleBtn.addEventListener("click", function shuffleFunc() {

    let randomNumber = (Math.floor(Math.random() * 100) + 1)
    let topLeftY = window.getComputedStyle(topLeftImage).getPropertyValue("background-position-y");
    let topLeftX = window.getComputedStyle(topLeftImage).getPropertyValue("background-position-x");
    let addPixelY = parseInt(topLeftY, 10) + randomNumber + "px";
    let addPixelX = parseInt(topLeftX, 10) + randomNumber + "px";
    topLeftImage.style.backgroundPositionY = addPixelY;
    topLeftImage.style.backgroundPositionX = addPixelX;

    let topRightY = window.getComputedStyle(topRightImage).getPropertyValue("background-position-y");
    let topRightX = window.getComputedStyle(topRightImage).getPropertyValue("background-position-x");
    let addPixelY1 = parseInt(topRightY, 10) + randomNumber + "px"; + "px";
    let addPixelX1 = parseInt(topRightX, 10) + randomNumber + "px"; + "px";
    topRightImage.style.backgroundPositionY = addPixelY1;
    topRightImage.style.backgroundPositionX = addPixelX1;

    let bottomLeftY = window.getComputedStyle(bottomLeftImage).getPropertyValue("background-position-y");
    let bottomLeftX = window.getComputedStyle(bottomLeftImage).getPropertyValue("background-position-x");
    let addPixelY2 = parseInt(bottomLeftY, 10) + randomNumber + "px"; + "px";
    let addPixelX2 = parseInt(bottomLeftX, 10) + randomNumber + "px"; + "px";
    bottomLeftImage.style.backgroundPositionY = addPixelY2;
    bottomLeftImage.style.backgroundPositionX = addPixelX2;

    let bottomRightY = window.getComputedStyle(bottomRightImage).getPropertyValue("background-position-y");
    let bottomRightX = window.getComputedStyle(bottomRightImage).getPropertyValue("background-position-x");
    let addPixelY3 = parseInt(bottomRightY, 10) + randomNumber + "px";
    let addPixelX3 = parseInt(bottomRightX, 10) + randomNumber + "px";
    bottomRightImage.style.backgroundPositionY = addPixelY3;
    bottomRightImage.style.backgroundPositionX = addPixelX3;

});





//Updates kaleidoscope image with the users image url
usersImage.oninput = function () {
    // we get the base64 image and assign it ot the image background
    toDataURL(usersImage.value, function (dataUrl) {
        topLeftImage.style.backgroundImage = 'url(' + dataUrl + ')';
        topRightImage.style.backgroundImage = 'url(' + dataUrl + ')';
        bottomLeftImage.style.backgroundImage = 'url(' + dataUrl + ')';
        bottomRightImage.style.backgroundImage = 'url(' + dataUrl + ')';
    });

    userAttribution.innerHTML = '';
    if (userAttribution.classList.contains("bg-white")) {
        userAttribution.classList.toggle("bg-white");
    }
};




//Allows for click and hold of button
function holdit(btn, method, start, speedup) {
    var t, keep = start;
    var repeat = function () {
        var args = Array.prototype.slice.call(arguments);
        method.apply(this, args);
        t = setTimeout(repeat, start, args[0], args[1], args[2], args[3], args[4], args[5]);
        if (start > keep / 20) start = start / speedup;
    }
    btn.onmousedown = btn.mousedown = repeat;
    //
    btn.onmouseout = btn.mouseout = btn.onmouseup = btn.mouseup = function () {
        clearTimeout(t);
        start = keep;
    }
};