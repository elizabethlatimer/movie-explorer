import React, { useState } from 'react';
import Routes from '../../Routes';
import UserContext from './movieContext';
import backendAPI from './backendAPI';


function UserProvider() {

  const [movieList, setMovieList] = useState(null);
  const [currentQuery, setCurrentQuery] = useState('');

  async function search() {
    let movies = await backendAPI.searchMovies(currentQuery);
    setMovieList(old => movies);
  }

  async function updateVotes(id, votes) {
    let movieIndex = movieList.movies.results.findIndex(movie => movie.id === +id);
    let newList = [...movieList.movies.results];
    newList[movieIndex] = {...newList[movieIndex], votes}
    setMovieList(oldState => {
      return {...oldState, movies:{...oldState.movies, results: newList}}})
  }

  return (
    <UserContext.Provider
      value={{
        movieList,
        setMovieList,
        search,
        setCurrentQuery,
        currentQuery,
        updateVotes
        }}>
      <Routes />
    </UserContext.Provider>
  );
};

export default UserProvider;