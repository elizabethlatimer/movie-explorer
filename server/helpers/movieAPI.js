const axios = require('axios');
const { API_KEY } = require('../config')

const BASE_URL = "https://api.themoviedb.org/3/"

export async function movieDBSearch(query) {
  let queryString = query.split(' ').join('%20');

  const movies = await axios
    .get(`${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${queryString}&include_adult=false`);

  return movies.data;
}

