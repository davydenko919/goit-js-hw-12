import iziToast from 'izitoast';
import axios from 'axios';

const KEY = `42787384-4c627c93f7dff570902230658`;
const BASE_URI = `https://pixabay.com/api/`;


export async function getImages(QUERY, page = 1) {
  const LINK = `${BASE_URI}?key=${KEY}&q=${QUERY}&image_type=photo&per_page=15&page=${page}`;
  console.log(LINK)
  try {
    const response = await axios.get(LINK);

    if (response.data.hits.length === 0) {
      if (page === 1) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        iziToast.show({
          message: 'We\'re sorry, but you\'ve reached the end of search results.',
      });
      // document.querySelector('.load-btn').style.display = 'none'; 
      }
     
      document.querySelector('.load-btn').style.display = 'none';
      return [];
    }
    return response.data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
