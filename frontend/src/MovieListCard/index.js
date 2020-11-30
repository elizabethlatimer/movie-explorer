import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './MovieListCard.scss';

function MovieListCard({ movieDetails }) {

  return (
    <div className="MovieListCard">
    <Link to={`/movies/${movieDetails.id}`}>
      <Card>
        <div className="card-horizontal">
          <div className="img-square-wrapper">
            <img className="" src={movieDetails.thumbnailPoster} alt={`${movieDetails.title} poster`} />
          </div>
          <Card.Body>
            <Card.Title>{movieDetails.title}</Card.Title>
            <Card.Text>{movieDetails.overview}</Card.Text>
            <Card.Text>Release date: {movieDetails.releaseDate}</Card.Text>
          </Card.Body>
        </div>
      </Card>
    </Link>
    </div>
  )
}

export default MovieListCard;