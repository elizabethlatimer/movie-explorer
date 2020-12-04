import React from 'react';
import { render } from "@testing-library/react";

import Home from './index';
import MovieContext from '../shared/helpers/movieContext'

const values = { setMovieList: () => jest.fn(), setCurrentQuery: () => jest.fn() };

test('renders without crashing', () => {
  render(
    <MovieContext.Provider value={values}>
      <Home />
    </MovieContext.Provider>);
});

test('matches the snapshot', () => {
  const { asFragment } = render(<MovieContext.Provider value={values}>
    <Home />
  </MovieContext.Provider>);
  expect(asFragment()).toMatchSnapshot();
});