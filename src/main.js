import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import {getImages} from "./js/pixabay-api.js"
import {createGallery} from "./js/render-functions.js"

const cardPlace = document.querySelector('.card-place');
const form = document.querySelector('.form');
const input = form.querySelector('.input');
// const QUERY = input.value.trim().toLowerCase().replace(/ /g, "+");

// const KEY = `42787384-4c627c93f7dff570902230658`;
// const BASE_URI = `https://pixabay.com/api/`;


form.addEventListener('submit', (event) => {
    event.preventDefault();

    cardPlace.innerHTML = '';
    const QUERY = input.value.trim().toLowerCase().replace(/ /g, "+");
    // const what = `${BASE_URI}?key=${KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&savesearch=true`;
    
    // console.log(what)
    // console.log(getImages(QUERY));
    // console.log(createGallery(getImages(QUERY)));
    getImages(QUERY)
    .then(arr => {
        cardPlace.innerHTML = createGallery(arr);
        lightbox.refresh();
        form.reset();
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
);

const lightbox = new SimpleLightbox('.gallery-link', {
    captionsData: 'alt',
    captionDelay: 250,
});

