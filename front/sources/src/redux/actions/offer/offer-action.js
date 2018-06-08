import typesOfferActions from './offer-types';

const API_KEY = "WCZZYjnOQFUYfJIN2ShH1iD24UHo58A6TI";
const URL_BASE = "https://qb-hr-mobile.appspot.com/api";

function requestData() {
  return {
    type: typesOfferActions.OFFER_REQ_DATA
  }
};

function receiveData(offers, pages) {
  return {
    type: typesOfferActions.OFFER_RECV_DATA,
    offers,
    pages
  }
};

function receiveDetailsData(offer, pages) {
  return {
    type: typesOfferActions.OFFER_RECV_DATA,
    offer,
    pages
  }
};

function receiveScrollData(offers, pages) {
  return {
    type: typesOfferActions.OFFER_RECV_SCROLL_DATA,
    offers,
    pages
  }
};

function receiveFilteredData(offers, pages) {
  return {
    type: typesOfferActions.OFFER_RECV_FILTERED_DATA,
    offers,
    pages
  }
};

function receiveRefreshData(offers, pages) {
  return {
    type: typesOfferActions.OFFER_RECV_REFRESH_DATA,
    offers,
    pages
  }
};

function requestError(error) {
  return {
    type: typesOfferActions.OFFER_REQ_ERROR,
    error
  }
};

function fetchListOffer(page = 0, params = {}, scrollable) {
  return function (dispatch) {
    dispatch(requestData())
    const pages = {
      current : 0,
      total : 0
    }
    Object.keys(params).forEach((key) => (params[key] === '') && delete params[key]);
    let esc = encodeURIComponent;
    const query = Object.keys(params)
             .map(k => esc(k) + '=' + esc(params[k]))
             .join('&');

    fetch(`${URL_BASE}/v1/offers?${query}&page=${page + 1}`, {
      headers: { 'x-api-token': API_KEY }
    })
      .then(response => {
        pages.current = Number.parseInt(response.headers.get('x-page'));
        pages.total = Number.parseInt(response.headers.get('x-total'));
        return response.json()
      })
      .then(responseJson => {
        if (scrollable) {
          dispatch(receiveScrollData(responseJson.offers, pages));
        } else {
          dispatch(receiveData(responseJson.offers, pages));
        }

      })
      .catch(err => dispatch(requestError(err)))
  }
}

export default {
  fetchListOffer
}