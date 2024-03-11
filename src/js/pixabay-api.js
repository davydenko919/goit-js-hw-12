
import axios from 'axios';

const KEY = `42787384-4c627c93f7dff570902230658`;
const BASE_URI = `https://pixabay.com/api/`;


export async function getImages(QUERY, page = 1) {
  try {
      const response = await axios.get(`${BASE_URI}?key=${KEY}&q=${QUERY}&image_type=photo&per_page=15&page=${page}`);
      return response.data;
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
  }
}
