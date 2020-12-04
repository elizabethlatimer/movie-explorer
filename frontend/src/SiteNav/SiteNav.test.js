import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from "@testing-library/react";

import SiteNav from './index';
import MovieContext from '../shared/helpers/movieContext'

const values = {
  setMovieList: () => jest.fn(),
  setCurrentQuery: () => jest.fn()
};

test('renders without crashing', () => {
  render(
    <MovieContext.Provider value={values}>
      <BrowserRouter>
        <SiteNav />
      </BrowserRouter>
    </MovieContext.Provider>);
});

test('matches the snapshot', () => {
  const { asFragment } = render(
    <MovieContext.Provider value={values}>
      <BrowserRouter>
        <SiteNav />
      </BrowserRouter>
    </MovieContext.Provider>);
  expect(asFragment()).toMatchSnapshot();
});