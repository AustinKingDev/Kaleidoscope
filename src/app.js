import html2canvas from 'html2canvas';

window.addEventListener("load", function() {
    let downloadbutton = this.document.getElementById("download");
    let closepreview = this.document.getElementById("closepreview");

    function temp(){
        html2canvas(
            document.getElementById("capture"))
            .then(canvas => {
                document.getElementById("preview").innerHTML = '';

                var imgaeData = canvas.toDataURL("image/png");
                var newData = imgaeData.replace(/^data:image\/png/, "data:application/octet-stream");
                
                // downloadbutton.setAttribute("download", "image.png")
                // downloadbutton.setAttribute("href", newData);

                document.getElementById("preview").append(canvas);
        });
    }

    downloadbutton.addEventListener("click", function(){
        temp();
    });

    closepreview.addEventListener("click", function(){
        document.getElementById("preview").innerHTML = '';
    });
});





        






















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
const shuffleBtn = document.getElementById("shuffleBtn");

//Changes X & Y background position values of kaleidoscope images 
upBtn.addEventListener("click", function upFunc() {

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

downBtn.addEventListener("click", function downFunc() {
   
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

leftBtn.addEventListener("click", function leftFunc() {
   
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

rightBtn.addEventListener("click", function rightFunc() {
   
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



upLeftBtn.addEventListener("click", function upLeftFunc() {
    
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


upRightBtn.addEventListener("click", function upRightFunc() {
   
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

downLeftBtn.addEventListener("click", function downLeftFunc() {
   
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

downRightBtn.addEventListener("click", function downRightFunc() {
   
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

shuffleBtn.addEventListener("click", function shuffleFunc() {
   
    let randomNumber = (Math.floor(Math.random()*100)+1)
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
usersImage.oninput = function()
{
    toDataURL(usersImage.value, function(dataUrl) {
        topLeftImage.style.backgroundImage = 'url(' + dataUrl + ')';
        topRightImage.style.backgroundImage = 'url(' + dataUrl + ')';
        bottomLeftImage.style.backgroundImage = 'url(' + dataUrl + ')';
        bottomRightImage.style.backgroundImage = 'url(' + dataUrl + ')';
    })
};

function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }


//Allows for click and hold of button
function holdit( btn, method, start, speedup ) {
    var t, keep = start;
    var repeat = function () {
        var args = Array.prototype.slice.call( arguments );
        method.apply( this, args );
        t = setTimeout( repeat, start, args[0], args[1], args[2], args[3], args[4], args[5] );
        if ( start > keep / 20 ) start = start / speedup;
    }
    btn.onmousedown = btn.mousedown = repeat;
    //
    btn.onmouseout = btn.mouseout = btn.onmouseup = btn.mouseup = function () {
        clearTimeout( t );
        start = keep;
    }
};
