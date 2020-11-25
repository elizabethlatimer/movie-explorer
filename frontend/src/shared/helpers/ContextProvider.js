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

  return (
    <UserContext.Provider
      value={{
        movieList,
        search,
        setCurrentQuery
        }}>
      <Routes />
    </UserContext.Provider>
  );
};

export default UserProvider;