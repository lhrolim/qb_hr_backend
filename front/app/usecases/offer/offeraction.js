import { FETCH_OFFERS, DETAIL_OFFER } from './offeractiontypes';

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

