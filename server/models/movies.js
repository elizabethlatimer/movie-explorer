import { movieDBSearch } from '../helpers/movieAPI';
const db = require('../db');

const expressError = require('../helpers/expressError');

class Movies {
  static async search(query) {
    let moviesFound = await movieDBSearch(query);



    return movieData;
  }

}

module.exports = Movies;