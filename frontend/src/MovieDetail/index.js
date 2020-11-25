import React, { useContext } from 'react';
import {useParams} from 'react-router-dom';
import MovieContext from '../shared/helpers/movieContext';


function MovieDetail() {
  const { movieList } = useContext(MovieContext);
  const { id }= useParams();

  let movie = movieList.movies.results.filter(movie => movie.id === id)[0]

  return (
    <div>
      {movie.title}
    </div>
  )


}

export default MovieDetail;