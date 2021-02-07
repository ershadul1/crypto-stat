import detailsReducer from '../details';
import * as actionTypes from '../../actions/actionTypes';

describe('details reducer', () => {
  it('should return the initial state', () => {
    expect(detailsReducer(undefined, {})).toEqual(
      { loading: true, error: false }
    )
  })

  it('should handle FETCH_DETAILS', () => {
    expect(
      detailsReducer([], {
        type: actionTypes.FETCH_DETAILS,
        payload: {}
      })
    ).toEqual(
      {
        loading: false, error: false,
      }
    )
  });

  it('should handle FETCH_DETAILS_ERROR', () => {
    expect(
      detailsReducer([], {
        type: actionTypes.FETCH_DETAILS_ERROR,
        payload: {}
      })
    ).toEqual(
      {
        loading: false, error: true, errorDetails: {}
      }
    )
  });
});