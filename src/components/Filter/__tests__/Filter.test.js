import React from 'react';
import renderer from 'react-test-renderer';
import Filter from '../Filter';

it('Filter snapshot test', () => {
  const tree = renderer
    .create(
      <Filter filter={Function} />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
