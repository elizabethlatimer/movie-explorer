import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { render } from "@testing-library/react";

import MovieListCard from './index';

const testMovie = {
  id: 7,
  title: "test movie",
  overview: "description here",
  releaseDate: "Jan 1, 2021",
  thumbnailPoster: 'https://www.joblo.com/assets/images/joblo/database-specific-img-225x333.jpg'
}

it('renders without crashing', () => {
  render(
    <BrowserRouter>
      <MovieListCard movieDetails={testMovie} />
    </BrowserRouter>);
});

it('matches the snapshot', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <MovieListCard movieDetails={testMovie} />
    </BrowserRouter>);
  expect(asFragment()).toMatchSnapshot();
});