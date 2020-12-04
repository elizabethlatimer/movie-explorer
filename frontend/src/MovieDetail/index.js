import React, { useContext } from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import MovieContext from '../shared/helpers/movieContext';
import backendAPI from '../shared/helpers/backendAPI';

import './MovieDetail.scss';


function MovieDetail() {
  const { movieList, updateVotes } = useContext(MovieContext);
  const { id } = useParams();

  let movie;
  let upvote;
  let downvote;
  let poster;

  //if a search hasn't been completed, redirect to home, else set up logic for component
  if (!movieList) {
    return <Redirect to='/' />
  } else {
    movie = movieList.movies.results.filter(movie => movie.id === +id)[0];

    //if movie data has no poster, use default link instead
    if (movie.mainPoster.includes('null')) {
      poster = 'https://www.joblo.com/assets/images/joblo/database-specific-img-225x333.jpg';
    } else {
      poster = movie.mainPoster;
    }

    upvote = async () => {
      let votes = await backendAPI.upvote({ id: id, title: movie.title })
      updateVotes(id, { upvotes: votes.upvotes, downvotes: movie.votes?.downvotes || 0 })

    }
    downvote = async () => {
      let votes = await backendAPI.downvote({ id, title: movie.title })
      updateVotes(id, { upvotes: movie.votes?.upvotes || 0, downvotes: votes.downvotes })
    }
  }

  return (
    <div className="MovieDetail">
      <div className="link-left">
        <Link to='/movies'>Back to results</Link>
      </div>
      <Card className="MovieDetailCard">
        <div className="card-horizontal">
          <div className="img-square-wrapper">
            <img className="" src={poster} alt={`${movie.title} poster`} />
          </div>
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>Directed by: {movie.director}</Card.Text>
            <Card.Text>{movie.overview}</Card.Text>
            <Card.Text>Release date: {movie.releaseDate === "Invalid Date" ? "Unknown" : movie.releaseDate}</Card.Text>
            <Card.Text>
              <Button size='sm' onClick={upvote}>{movie?.votes?.upvotes || 0}
                <FontAwesomeIcon icon={faThumbsUp} />
              </Button>
              {' '}Vote{' '}
              <Button size='sm' onClick={downvote}> {movie?.votes?.downvotes || 0}
                <FontAwesomeIcon icon={faThumbsDown} />
              </Button>
            </Card.Text>
          </Card.Body>
        </div>
      </Card>
    </div>
  )
}

export default MovieDetail;