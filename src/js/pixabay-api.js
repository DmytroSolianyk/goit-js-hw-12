import axios from 'axios';

const API_KEY = '48841275-5fdf514aecbb5a7f0d9901bba';
const BASE_URL = 'https://pixabay.com/api/';

export function searchImages(query, page = 1, per_page = 10) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        safesearch: true,
        orientation: 'horizontal',
        page: page,
        per_page: per_page,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Помилка при виконанні запиту:', error);
      throw error;
    });
}
