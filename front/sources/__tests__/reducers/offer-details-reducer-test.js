import offerDetailsReducer from '../../src/redux/reducers/offer-details/offer-details-reducer';
import offerDetailsMockData from '../../__mocks__/getOfferDetailsMock.json';
import { fromJS } from 'immutable'

export const OFFER_DETAILS_REQ_DATA = 'OFFER_DETAILS_REQ_DATA';
export const OFFER_DETAILS_RECV_DATA = 'OFFER_DETAILS_RECV_DATA';
export const OFFER_DETAILS_REQ_ERROR = 'OFFER_DETAILS_REQ_ERROR';

import { normalize } from 'normalizr'
import offerDetails from '../../__mocks__/schema/offerDetails';

describe('Property Details Reducer', () => {

    it('has a default state', () => {

        expect(offerDetailsReducer(undefined, {type: 'unexpected'})).toEqual(fromJS({}))

    })
    it('has a GET_PROPERTY_DETAILS_SUCCESS state', () => {

        let normalizedData = normalize(propertyDetailsMockData, offerDetails)
        let data = fromJS(normalizedData.entities.properties)
        expect(offerDetailsReducer(fromJS({}), {type: OFFER_DETAILS_RECV_DATA, normalizedData})).toEqual(data)
        
    })

})

export default propertyDetails