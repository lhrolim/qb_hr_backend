import { FETCH_OFFERS, DETAIL_OFFER, SET_FILTERS, REMOVE_FILTER, SET_SUBJECTS, SET_UNIVERSITIES, CLEAR_FILTERS } from './offeractiontypes';

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

export const removeOfferFilter = filter => ({
    type: REMOVE_FILTER,
    payload: filter
})

export const setSubjects = subjects => ({
    type: SET_SUBJECTS,
    payload: subjects
})

export const setUniversities = universities => ({
    type: SET_UNIVERSITIES,
    payload: universities
})

export const clearOfferFilters = () => ({
    type: CLEAR_FILTERS,
    payload: {}
})
