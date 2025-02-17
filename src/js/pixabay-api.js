import axios from 'axios';

const API_KEY = '48841275-5fdf514aecbb5a7f0d9901bba';
const BASE_URL = 'https://pixabay.com/api/';

export function searchImages(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        safesearch: true,
        orientation: 'horizontal',
      },
    })
    .then(response => {
      return response.data.hits ?? [];
    })
    .catch(error => {
      console.error('Помилка при виконанні запиту:', error);
      throw error;
    });
}
