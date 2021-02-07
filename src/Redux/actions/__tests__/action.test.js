import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'jest-mock-axios';
import * as actions from '../index';
import * as types from '../actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('Fetch coin list action', () => {
    const store = mockStore({ list: {} });
    const data = {
      data: [
        {
          id: 1,
          title: 'title 1',
        },
        {
          id: 2,
          title: 'title 2',
        },
        {
          id: 3,
          title: 'mocked title',
        }],
    };

    mockAxios.get.mockResolvedValueOnce(data.data);

    const expectedActions = [{ type: types.FETCH_LIST, payload: data.data }];

    return store.dispatch(actions.fetchList('usd')).then(() => {
      expect(store.getActions()).toStrictEqual(expectedActions);
    });
  });

  it('Fetch coin details action', () => {
    const store = mockStore({ details: {} });
    const data = {
      data: [
        {
          id: 1,
          title: 'title 1',
        },
        {
          id: 2,
          title: 'title 2',
        },
        {
          id: 3,
          title: 'mocked title',
        }],
    };

    mockAxios.get.mockResolvedValueOnce(data.data);

    const expectedActions = [{ type: types.FETCH_DETAILS, payload: data.data }];

    return store.dispatch(actions.fetchDetails('bitcoin')).then(() => {
      expect(store.getActions()).toStrictEqual(expectedActions);
    });
  });
});
