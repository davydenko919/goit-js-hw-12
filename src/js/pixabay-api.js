import iziToast from 'izitoast';

const KEY = `42787384-4c627c93f7dff570902230658`;
const BASE_URI = `https://pixabay.com/api/`;

export function getImages(QUERY) {
  const LINK = `${BASE_URI}?key=${KEY}&q=${QUERY}`;
  return fetch(LINK)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response error with status ${response.status}`);
      }

      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return [];
      }
      return data;

    })
    .catch(error => {
       console.log(`Error: ${error}`)
    });
}
