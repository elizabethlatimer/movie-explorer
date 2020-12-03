import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './MovieListCard.scss';

function MovieListCard({ movieDetails }) {

  let poster = movieDetails.thumbnailPoster;

  if (movieDetails.thumbnailPoster.includes('null')) {
    poster = 'https://www.joblo.com/assets/images/joblo/database-specific-img-225x333.jpg';
  }

  return (
    <div className="MovieListCard">
    <Link to={`/movies/${movieDetails.id}`}>
      <Card>
        <div className="card-horizontal">
          <div className="img-square-wrapper">
            <img className="" src={poster} alt={`${movieDetails.title} poster`} />
          </div>
          <Card.Body>
            <Card.Title>{movieDetails.title}</Card.Title>
            <Card.Text>Release date: {movieDetails.releaseDate}</Card.Text>
            <Card.Text className='line-clamp'>{movieDetails.overview}</Card.Text>
          </Card.Body>
        </div>
      </Card>
    </Link>
    </div>
  )
}

export default MovieListCard;