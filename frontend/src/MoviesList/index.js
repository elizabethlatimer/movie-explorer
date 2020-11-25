import React, { useContext, useEffect } from 'react';

import MovieListCard from '../MovieListCard';
import MovieContext from '../shared/helpers/movieContext';


function MoviesList() {
  const { movieList, search } = useContext(MovieContext);

  useEffect(() => {
    search();
  }, [])


  if (movieList?.movies) {
    return (
      <div className="MoviesList">
        {movieList.movies.results.map(movie => <MovieListCard movieDetails={movie} key={movie.id} />)}
      </div>
    )
  } else {
    return (
      <div>loading</div>
    )
  }
}

export default MoviesList;