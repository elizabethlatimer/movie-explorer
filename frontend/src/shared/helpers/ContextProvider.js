import React, { useState } from 'react';

import Routes from '../../Routes';
import MovieContext from './movieContext';
import backendAPI from './backendAPI';

//Provider of state and functions used across the app
function MovieProvider() {
  const [movieList, setMovieList] = useState(null);
  const [currentQuery, setCurrentQuery] = useState('');

  async function search() {
    let movies = await backendAPI.searchMovies(currentQuery);
    setMovieList(old => movies);
  }

  async function updateVotes(id, votes) {
    let movieIndex = movieList.movies.results.findIndex(movie => movie.id === +id);
    let newList = [...movieList.movies.results];

    newList[movieIndex] = { ...newList[movieIndex], votes };

    setMovieList(oldState => {
      return { ...oldState, movies: { ...oldState.movies, results: newList } }
    });
  }

  return (
    <MovieContext.Provider
      value={{
        movieList,
        setMovieList,
        search,
        setCurrentQuery,
        currentQuery,
        updateVotes
      }}>
      <Routes />
    </MovieContext.Provider>
  );
};

export default MovieProvider;