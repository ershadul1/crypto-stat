import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Coin from '../Coin';

it('Coin snapshot test', () => {
  const data = {
    id: 'bitcoin',
    name: 'Bitcoin',
    image: 'https://example.com/image.jpg',
    current_price: 20,
    market_cap: 500,
    total_volume: 100,
    price_change_percentage_24h: 5,
    price_change_percentage_7d_in_currency: 10,
  };
  const currency = 'usd';
  const tree = renderer
    .create(
      <BrowserRouter>
        <Coin data={data} currency={currency} />
      </BrowserRouter>,

    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
