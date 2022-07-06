const imageContainer =document.getElementById('image-container');
const loader =document.getElementById('loader');

let photosArray =[];

const count=10;
const apiKey='h1nstfq9vhpIt4fX4uRiRSweIONr28kjP3Csm6wQb3A';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;


// function setAttribute(element,attribute){
//     for (const key in attributes){

//     }
// }

function displayPhotos(){
    photosArray.forEach((photo) => {
        //create <a> to link to unsplash
        const item = document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target','_blank');

        const img= document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('alt',photo.alt_description);
        img.setAttribute('title',photo.alt_description);

        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}





async function getPhotos(){
    try{
        const response=await fetch(apiUrl);
        photosArray =await  response.json();
    // console.log(photosArray);
        displayPhotos();

    }catch(error){


    }
}
getPhotos();