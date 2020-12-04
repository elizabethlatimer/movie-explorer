import React, { useContext, useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import MovieListCard from '../MovieListCard';
import MovieContext from '../shared/helpers/movieContext';

import './MoviesList.scss';


function MoviesList() {
  const { movieList, search, currentQuery } = useContext(MovieContext);
  const executeSearch = useCallback(() => { search(); }, [search])

  useEffect(() => {
    executeSearch();
  }, [movieList, executeSearch]);


  if (!currentQuery) {
    return <Redirect to="/" />
  } else if (movieList?.movies) {
    return (
      <div className="MoviesList">
        <h2 className='page-header'>Search Results</h2>
        {movieList.movies.results[0]
          ? movieList.movies.results.map(movie => <MovieListCard movieDetails={movie} key={movie.id} />)
          : <p>{`We couldn't find any results for ${currentQuery}`}</p>}
      </div>
    )
  } else {
    return (
      <div className="MoviesList">
        <Spinner className="spinner" animation="border" role="status" variant='primary'>
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>

    )
  }
}

export default MoviesList;