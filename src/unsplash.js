import { createApi } from 'unsplash-js';

async function randomImage(){

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

export { randomImage }; 
