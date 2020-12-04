import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render } from "@testing-library/react";

import MovieDetail from './index';
import MovieContext from '../shared/helpers/movieContext'

const values = {
  movieList: {
    "movies": {
      "numResults": 150,
      "results": [
        {
          "id": 618354,
          "title": "Superman: Man of Tomorrow",
          "overview": "It’s the dawn of a new age of heroes, and Metropolis has just met its first. But as Daily Planet intern Clark Kent – working alongside reporter Lois Lane – secretly wields his alien powers of flight, super-strength and x-ray vision in the battle for good, there’s even greater trouble on the horizon.",
          "thumbnailPoster": "https://image.tmdb.org/t/p/w185/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg",
          "mainPoster": "https://image.tmdb.org/t/p/w342/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg",
          "releaseDate": "August 22, 2020",
          "director": "Chris Palmer"
        }]
    }
  },
  updateVotes: () => jest.fn()
};

test('renders without crashing', () => {
  render(
    <MovieContext.Provider value={values}>
      <MemoryRouter initialEntries={['/movie/618354']}>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
      </MemoryRouter>
    </MovieContext.Provider>);
});

test('matches the snapshot', () => {
  const { asFragment } = render(
    <MovieContext.Provider value={values}>
      <MemoryRouter initialEntries={['/movie/618354']}>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
      </MemoryRouter>
    </MovieContext.Provider>);
  expect(asFragment()).toMatchSnapshot();
});