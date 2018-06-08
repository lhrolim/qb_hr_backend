import typesOfferDetailsActions from './offer-details-types';

const API_KEY = "WCZZYjnOQFUYfJIN2ShH1iD24UHo58A6TI";
const URL_BASE = "https://qb-hr-mobile.appspot.com/api";

function requestData() {
  return {
    type: typesOfferDetailsActions.OFFER_DETAILS_REQ_DATA
  }
};

function receiveDetailsData(offer) {
  return {
    type: typesOfferDetailsActions.OFFER_DETAILS_RECV_DATA,
    offer
  }
};

function requestError(error) {
  return {
    type: typesOfferDetailsActions.OFFER_DETAILS_REQ_ERROR,
    error
  }
};

function fetchOfferDetails(offerId) {
  return function (dispatch) {
    dispatch(requestData())
    fetch(`${URL_BASE}/v1/offers/${offerId}`, {
      headers: { 'x-api-token': API_KEY }
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch(receiveDetailsData(responseJson.offer));
      })
      .catch(err => dispatch(requestError(err)))
  }
}


export default {
  fetchOfferDetails
}