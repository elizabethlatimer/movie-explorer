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

async function getMovieDirector(movieID) {
  try {
    const crew = (await axios
      .get(`${BASE_URL}movie/${movieID}/credits`,
      { params: { api_key: API_KEY, language: "en-US"}}
      )).data.crew;

      console.log(crew)

    const director = crew.filter(person => person.job === "Director");

    return director[0].name;
  } catch (err) {
    return "No Director Found"
  }
}

module.exports = { movieDBSearch, getMovieDirector }

