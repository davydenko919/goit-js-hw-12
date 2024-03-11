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
// let limit = 15;
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

  // console.log(getImages(QUERY));

  getImages(QUERY)
    .then(arr => {
      totalImg = arr.totalHits;
      totalPages = Math.ceil(totalImg / 15);
      // console.log(totalImg);
      // console.log(totalPages);

      if (totalImg === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        document.querySelector('.load-btn').style.display = 'none';
        loader.style.display = 'none';
      } else if (totalImg <= 15) {
        cardPlace.innerHTML = createGallery(arr);
        lightbox.refresh();
        form.reset();
        document.querySelector('.load-btn').style.display = 'none';
      } else {
        cardPlace.innerHTML = createGallery(arr);
        lightbox.refresh();
        form.reset();
        document.querySelector('.load-btn').style.display = 'block';
      }
      loader.style.display = 'none';
    })
    .catch(error => {
      iziToast.error({
        message: `${error}`,
      });
    });
}

async function loadBtnFct(event) {
  event.preventDefault();
  loader.style.display = 'flex';
  page++;

  if (page >= totalPages) {
    iziToast.show({
      message: "We're sorry, but you've reached the end of search results.",
    });
    document.querySelector('.load-btn').style.display = 'none';
    loader.style.display = 'none';
  }
  try {
    const response = await getImages(lastSerch, page);
    const galleryMarkup = createGallery(response);
    cardPlace.insertAdjacentHTML('beforeend', galleryMarkup);
    lightbox.refresh();
    smoothScrollBy(
      cardPlace.firstElementChild.getBoundingClientRect().height * 2);
    loader.style.display = 'none';
  } catch (error) {
    iziToast.error({
      message: `${error}`,
    });
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


// в коді нижче колекція складається тільки з 15 позицій, якщо менше, то вона не працює, (просто мені здалось, що це така умова була)

// async function submitFormFct(event) {
//   event.preventDefault();
//   loader.style.display = 'flex';
//   page = 1;
//   cardPlace.innerHTML = '';
//   const QUERY = input.value.trim().toLowerCase().replace(/ /g, '+');
//   lastSerch = QUERY;

//   console.log(getImages(QUERY));

//   getImages(QUERY)
//     .then(arr => {
//       totalImg = arr.totalHits;
//       totalPages = Math.floor(totalImg / 15);
//       console.log(totalImg);
//       console.log(totalPages);

//       if (totalImg < 15) {
//         iziToast.error({
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//         });
//         document.querySelector('.load-btn').style.display = 'none';
//         loader.style.display = 'none';
//       } else if (totalImg >= 15 && totalImg < 30) {
//         cardPlace.innerHTML = createGallery(arr);
//         lightbox.refresh();
//         form.reset();
//         document.querySelector('.load-btn').style.display = 'none';
//       } else {
//         cardPlace.innerHTML = createGallery(arr);
//         lightbox.refresh();
//         form.reset();
//         document.querySelector('.load-btn').style.display = 'block';
//       }
//       loader.style.display = 'none';
//     })
//     .catch(error => {
//       iziToast.error({
//         message: `${error}`,
//       });
//     });
// }