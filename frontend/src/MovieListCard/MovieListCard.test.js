import React from 'react';
import { render } from "@testing-library/react";
import MovieListCard from './index';
import {BrowserRouter} from 'react-router-dom'

const testMovie = {
  id: 7,
  title: "test movie",
  overview: "description here",
  releaseDate: "Jan 1, 2021",
  thumbnailPoster:'https://www.joblo.com/assets/images/joblo/database-specific-img-225x333.jpg'
}

it('renders without crashing', () => {
  render(<BrowserRouter><MovieListCard movieDetails={testMovie}/></BrowserRouter>);
});

it('matches the snapshot', () => {
  const {asFragment} = render(<BrowserRouter><MovieListCard movieDetails={testMovie}/></BrowserRouter>);
  expect(asFragment()).toMatchSnapshot();
});