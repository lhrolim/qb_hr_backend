import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';

import { offerDetailsActions } from '../../src/redux/actions';
import offerDetails from '../../__mocks__/schema/offerDetails';
import offerDetailsMockData from '../../__mocks__/getOfferDetailsMock.json';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('creates OFFER_DETAILS_RECV_DATA when getting details', () => {

    let normalizedData = normalize(offerDetailsMockData, offerDetails)
    const initialState = {}
    const store = mockStore({ offerDetails: initialState })

    console.log("actions are:" + store.getActions())
    
    const expectedActions = [
      { type: OFFER_DETAILS_REQ_DATA, offerId: "1" },
      { type: OFFER_DETAILS_RECV_DATA, offerId: "1", offerDetailsMockData }
    ]

    return store.dispatch(offerDetailsActions.actions.fetchOfferDetails('1')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })

  })

})