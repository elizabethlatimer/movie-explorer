import React from 'react';
import { render } from "@testing-library/react";

import Footer from './index';

it('renders without crashing', () => {
  render(<Footer />);
});

it('matches the snapshot', () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});