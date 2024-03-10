import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import {getImages} from "./js/pixabay-api.js"
import {createGallery} from "./js/render-functions.js"

const cardPlace = document.querySelector('.card-place');
const form = document.querySelector('.form');
const input = form.querySelector('.input');
const loadButton = document.querySelector('.load-btn');
let lastSerch;
loadButton.style.display = 'none';
let limit = 15;
const totalHits = Math.ceil(100 / limit);


form.addEventListener('submit', (event) => {
    event.preventDefault();
    page = 1;
    cardPlace.innerHTML = '';
    const QUERY = input.value.trim().toLowerCase().replace(/ /g, "+");
    lastSerch = QUERY;
    loadButton.style.display = 'block';
    // console.log(getImages(QUERY));
    // console.log(createGallery(getImages(QUERY)));
    
    getImages(QUERY, page)
    .then(arr => {
        cardPlace.innerHTML = createGallery(arr);
        lightbox.refresh();
        form.reset();
      })
      .catch(error => {
        console.error('Error:', error);
      });
});

const lightbox = new SimpleLightbox('.gallery-link', {
    captionsData: 'alt',
    captionDelay: 250,
});



let page = 1;

loadButton.addEventListener('click', async () => {
  page++; 
  if (page > totalHits) {
      loadButton.style.display = 'none'; 
      iziToast.show({
          message: 'We\'re sorry, but you\'ve reached the end of search results.',
      });
      return;
  }
  try {
      const response = await getImages(lastSerch, page);

      if (response.hits.length > 0) {
          const galleryMarkup = createGallery(response);
          cardPlace.insertAdjacentHTML('beforeend', galleryMarkup);
          lightbox.refresh(); 
          smoothScrollBy(cardPlace.firstElementChild.getBoundingClientRect().height * 2);
      } else {
          iziToast.show({
              message: 'We\'re sorry, but you\'ve reached the end of search results.',
          });
          document.querySelector('.load-btn').style.display = 'none'; 
      }
  } catch (error) {
      console.error('Error:', error);
  }
});

function smoothScrollBy(distance) {
  window.scrollBy({
      top: distance,
      behavior: 'smooth'
  });
}