import listReducer from '../list';
import * as actionTypes from '../../actions/actionTypes';

describe('list reducer', () => {
  it('should return the initial state', () => {
    expect(listReducer(undefined, {})).toEqual(
      { loading: true, error: false },
    );
  });

  it('should handle FETCH_LIST', () => {
    expect(
      listReducer([], {
        type: actionTypes.FETCH_LIST,
        payload: {},
      }),
    ).toEqual(
      {
        loading: false, error: false,
      },
    );
  });

  it('should handle FETCH_LIST_ERROR', () => {
    expect(
      listReducer([], {
        type: actionTypes.FETCH_LIST_ERROR,
        payload: {},
      }),
    ).toEqual(
      {
        loading: false, error: true, errorDetails: {},
      },
    );
  });
});
