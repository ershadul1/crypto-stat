import filterReducer from '../filter';
import * as actionTypes from '../../actions/actionTypes';

describe('filter reducer', () => {
  it('should return the initial state', () => {
    expect(filterReducer(undefined, {})).toEqual(
      { currency: 'usd', sortBy: 'market_cap', order: 'desc' },
    );
  });

  it('should handle CHANGE_FILTER', () => {
    expect(
      filterReducer([], {
        type: actionTypes.CHANGE_FILTER,
        payload: { sortBy: 'name' },
      }),
    ).toEqual(
      {
        sortBy: 'name',
      },
    );
  });
});
