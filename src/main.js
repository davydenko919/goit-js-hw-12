import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImages } from './js/pixabay-api.js';
import { createGallery } from './js/render-functions.js';

const cardPlace = document.querySelector('.card-place');
const form = document.querySelector('.form');
const input = form.querySelector('.input');
const loadButton = document.querySelector('.load-btn');
const loader = document.querySelector('.loader-div');
loader.style.display = 'none';

let lastSerch;
loadButton.style.display = 'none';
let limit = 15;
let page = 1;
let totalImg;
let totalPages;

form.addEventListener('submit', submitFormFct);
loadButton.addEventListener('click', loadBtnFct);

async function submitFormFct(event) {
  event.preventDefault();
  loader.style.display = 'flex';
  page = 1;
  cardPlace.innerHTML = '';
  const QUERY = input.value.trim().toLowerCase().replace(/ /g, '+');
  lastSerch = QUERY;
  
//   console.log(getImages(QUERY));

  getImages(QUERY)
    .then(arr => {
      totalImg = arr.totalHits;
      totalPages = Math.floor(totalImg / limit);
      
    //   console.log(totalImg);
      if (totalImg < limit) {
        iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
          document.querySelector('.load-btn').style.display = 'none';
          loader.style.display = 'none';
      } else {
        cardPlace.innerHTML = createGallery(arr);
        lightbox.refresh();
        form.reset();
        loadButton.style.display = 'block';
        if (totalPages === 1) {
            document.querySelector('.load-btn').style.display = 'none';
          }
        loader.style.display = 'none';
      }
    })
    .catch(error => {
        iziToast.error({
          message:
            `${error}`,
        });
    });
}

async function loadBtnFct(event) {
  event.preventDefault();
  loader.style.display = 'flex';
  page++;
  //   const imagesAmount = getImages(lastSerch).totalHits;
  //   console.log(imagesAmount);
  
//   console.log(totalPages);

  if (page >= totalPages) {
    iziToast.show({
      message: "We're sorry, but you've reached the end of search results.",
    });
    document.querySelector('.load-btn').style.display = 'none';
    loader.style.display = 'none';
    // return;
  }
  try {
    const response = await getImages(lastSerch, page);

    if (response.hits.length > 0) {
      const galleryMarkup = createGallery(response);
      cardPlace.insertAdjacentHTML('beforeend', galleryMarkup);
      lightbox.refresh();
      smoothScrollBy(
        cardPlace.firstElementChild.getBoundingClientRect().height * 2
      );
      loader.style.display = 'none';
    } else {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
      });
      document.querySelector('.load-btn').style.display = 'none';
      loader.style.display = 'none';
    }
  } catch (error) {
    iziToast.error({
        message:
          `${error}`,})

  }
}






const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});
function smoothScrollBy(distance) {
  window.scrollBy({
    top: distance,
    behavior: 'smooth',
  });
}
