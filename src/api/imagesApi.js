import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';

const API_KEY = '29767346-edf06844e45d287b086e01957';

const PER_PAGE = 12;

export const fetchImages = (query, page) => {
  return axios.get(
    `${BASE_URL}/?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
  );
};
