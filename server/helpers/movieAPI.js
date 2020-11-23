const axios = require('axios');
const { API_KEY } = require('../config')

const BASE_URL = "https://api.themoviedb.org/3/"

async function movieDBSearch(query) {

  const movies = await axios
    .get(`${BASE_URL}search/movie`,
      { params: { api_key: API_KEY, language: "en-US", query: query, include_adult: false } }
    );

  return movies.data;
}

module.exports = { movieDBSearch }

