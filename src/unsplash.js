import { createApi } from 'unsplash-js';

export async function randomImage(){

    try{
        const unsplash = createApi({
            accessKey: process.env.publicapikey,
            // apiUrl: 'https://mywebsite.com/unsplash-proxy',
        });
        const results = await unsplash.photos.getRandom({});
        // console.log('results :>> ', results.response.urls.full);
        return results.response.urls.full;
    }
    catch(err){
        console.log('err :>> ', err);
    }

}


export async function loadrndimage(topLeftImage,topRightImage,bottomLeftImage,bottomRightImage){

    toDataURL(await randomImage(), function(dataUrl) {
        topLeftImage.style.backgroundImage = 'url(' + dataUrl + ')';
        topRightImage.style.backgroundImage = 'url(' + dataUrl + ')';
        bottomLeftImage.style.backgroundImage = 'url(' + dataUrl + ')';
        bottomRightImage.style.backgroundImage = 'url(' + dataUrl + ')';
    })
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