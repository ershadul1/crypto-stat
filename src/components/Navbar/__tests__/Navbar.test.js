import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

it('Navbar snapshot test', () => {
  const tree = renderer
    .create(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});