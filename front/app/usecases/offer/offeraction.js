import { FETCH_OFFERS } from './offeractiontypes';

export const toggleSearch = () =>{

};

export const fetchOffers = offers => ({
    type: FETCH_OFFERS,
    payload: offers
});

