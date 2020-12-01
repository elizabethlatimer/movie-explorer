import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

import MovieListCard from '../MovieListCard';
import MovieContext from '../shared/helpers/movieContext';


function MoviesList() {
  const { movieList, search, currentQuery } = useContext(MovieContext);

  useEffect(() => {
    search();
  }, [])


  if (!currentQuery) {
    return <Redirect to="/" />
  } else if (movieList?.movies) {
    return (
      <div className="MoviesList">
        <h2>Search Results</h2>
        {movieList.movies.results[0]
          ? movieList.movies.results.map(movie => <MovieListCard movieDetails={movie} key={movie.id} />)
          : <p>{`We couldn't find any results for ${currentQuery}`}</p>}
      </div>
    )
  } else {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }
}

export default MoviesList;