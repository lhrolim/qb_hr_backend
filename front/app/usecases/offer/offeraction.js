import { FETCH_OFFERS, DETAIL_OFFER, SET_FILTERS } from './offeractiontypes';

export const toggleSearch = () =>{

};

export const fetchOffers = offers => ({
    type: FETCH_OFFERS,
    payload: offers
});

export const detailOffer = offer => ({
    type: DETAIL_OFFER,
    payload: offer
});

export const setOfferFilters = filters => ({
    type: SET_FILTERS,
    payload: filters
});
