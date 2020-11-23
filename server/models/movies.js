const { movieDBSearch } = require('../helpers/movieAPI');
const db = require('../db');

const expressError = require('../helpers/expressError');

class Movies {
  static async search(query) {
    //query external API
    let moviesFound = await movieDBSearch(query);

    //remove extra data from API response
    let movieData = { numResults: moviesFound.total_results };
    movieData.results = moviesFound.results.map(movie => {
      return ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster_path: `https://image.tmdb.org/t/p/w342${movie.poster_path}`,
        releaseDate: movie.release_date
      })
    });

    //check database for votes

    movieData.results = await Promise.all(movieData.results.map(async (movie) => {
      let votes = await Movies.getVotes(movie.id);

      return { ...movie, votes };
    }))

    return movieData;
  }

  //helper function to get the current up and down votes for movies in the database when searching
  static async getVotes(id) {
    let votes = (await db.query(
      `SELECT upvotes, downvotes FROM movies
       WHERE id = $1`, [id])).rows[0];

    return votes;
  }

  //functions for up and downvoting a movie and storing that info in the database
  static async upvote(movie) {
    let recordExists = (await db.query(
      `SELECT upvotes FROM movies
        WHERE id = $1`, [movie.id]
    )).rows;

    let voteCount;

    if (recordExists[0]) {
      voteCount = await db.query(
        `UPDATE movies
        SET upvotes = $1
        WHERE id = $2
        RETURNING upvotes`, [recordExists[0].upvotes += 1, movie.id]
      )
    } else {
      voteCount = await db.query(
        `INSERT INTO movies
        VALUES ($1, $2, $3, $4)
        RETURNING upvotes`, [movie.id, movie.title, 1, 0]
      )
    }
    return voteCount.rows[0].upvotes;
  }

  static async downvote(movie) {
    let recordExists = (await db.query(
      `SELECT downvotes FROM movies
        WHERE id = $1`, [movie.id]
    )).rows;
    let voteCount;

    if (recordExists[0]) {
      voteCount = await db.query(
        `UPDATE movies
        SET downvotes = $1
        WHERE id = $2
        RETURNING downvotes`, [recordExists[0].downvotes += 1, movie.id]
      )
    } else {
      voteCount = await db.query(
        `INSERT INTO movies
        VALUES ($1, $2, $3, $4)
        RETURNING downvotes`, [movie.id, movie.title, 0, 1]
      )
    }
    return voteCount.rows[0].downvotes;
  }


}

module.exports = Movies;