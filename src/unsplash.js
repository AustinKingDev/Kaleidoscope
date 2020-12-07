import { createApi } from 'unsplash-js';

export async function randomImage(){

    try{
        const unsplash = createApi({
            accessKey: process.env.publicapikey,
            // apiUrl: 'https://mywebsite.com/unsplash-proxy',
        });
        const results = await unsplash.photos.getRandom({});
        // console.log('results :>> ', results.response);
        // return results.response.urls.full;
        return results.response;
    }
    catch(err){
        console.log('err :>> ', err);
    }

}


export async function loadrndimage(userAttribution,topLeftImage,topRightImage,bottomLeftImage,bottomRightImage){
    let data = await randomImage();


    toDataURL(data.urls.full, function(dataUrl) {
        topLeftImage.style.backgroundImage = 'url(' + dataUrl + ')';
        topRightImage.style.backgroundImage = 'url(' + dataUrl + ')';
        bottomLeftImage.style.backgroundImage = 'url(' + dataUrl + ')';
        bottomRightImage.style.backgroundImage = 'url(' + dataUrl + ')';
    });

    imgAttribution(userAttribution,data);
} 

// takes the user input image and create a base644 data code
export function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}

async function imgAttribution(imgAttribution,data){
    if (!imgAttribution.classList.contains("bg-white")) {
        imgAttribution.classList.toggle("bg-white");
    }
    
    let Attribution = "";
    let ref = "?utm_source=Kaleidoscope&utm_medium=referral";

    Attribution = `Photo by <a target="_blank" href="${data.user.links.html}${ref}">${data.user.name}</a> on <a target="_blank" href="https://unsplash.com${ref}">Unsplash</a>`;

    imgAttribution.innerHTML = Attribution;
}