import agent from 'infra/server/superagent'
import * as type from './offerActionTypes'
import {NavigationActions} from 'react-navigation';

const fetchOffersListStart = (filter) => ({
    type: type.FECTH_OFFERS_LIST_START,
    payload: filter,

})

const fetchOffersListSuccess = (offersList) => ({
    type: type.FECTH_OFFERS_LIST_SUCCESS,
    payload: offersList,
})

const clearAndFetchOffersListStart = (filter) => ({
    type: type.CLEAR_AND_FETCH_OFFERS_LIST_START,
    payload: filter,
})

const clearAndFetchOffersListSuccess = (offersList) => ({
    type: type.CLEAR_AND_FETCH_OFFERS_LIST_SUCCESS,
    payload: offersList,
})

const filterAndFetchListSuccess = (offersList) => ({
    type: type.FILTER_AND_FETCH_LIST_SUCCESS,
    payload: offersList,
})

const fetchOffersListError = (err) => ({
    type: type.FECTH_OFFERS_LIST_ERROR,
    payload: err,
})

export const fetchOffersList = (filter, clear, search) => async (dispatch) => {
    try {
        if (clear) {
            dispatch(clearAndFetchOffersListStart(filter))
        } else {
            dispatch(fetchOffersListStart(filter))
        }

        if (search) dispatch(NavigationActions.back())

        const res = await agent.Offer.list();
        if (res.err) {
            dispatch(fetchOffersListError(res.err))
        } else {
            if (clear) {
                dispatch(clearAndFetchOffersListSuccess(res.data))
            } else {
                if (search) {
                    dispatch(filterAndFetchListSuccess(res.data))
                } else {
                    dispatch(fetchOffersListSuccess(res.data))
                }
            }
        }
    } catch (err) {
        dispatch(fetchOffersListError(err))
    }
}

// Offer detail

const offerDetailStart = () => ({
    type: type.OFFER_DETAIL_START,
})

const offerDetailSuccess = (offer) => ({
    type: type.OFFER_DETAIL_SUCCESS,
    payload: offer,
})

const offerDetailError = (err) => ({
    type: type.OFFER_DETAIL_ERROR,
    payload: err,
})

export const getOfferDetail = (id) => async (dispatch) => {
    try {
        dispatch(offerDetailStart())
        const res = await agent.Offer.detail(id);
        if (res.err) {
            dispatch(offerDetailError(res.err))
        } else {
            dispatch(offerDetailSuccess(res.data))
        }
    } catch (err) {
        dispatch(offerDetailError(err))
    }
}

// Search Offers

const searchStart = () => ({
    type: type.SEARCH_START,
})

const searchError = (err) => ({
    type: type.SEARCH_ERROR,
    payload: err,
})

const courseSearchSuccess = (list, text) => ({
    type: type.COURSES_SEARCH_SUCCESS,
    payload: {list, text},
})

const universitySearchSuccess = (list, text) => ({
    type: type.UNIVERTISY_SEARCH_SUCCESS,
    payload: {list, text},
})


export const searchCourses = (type, searchText) => async (dispatch) => {
    try {
        dispatch(searchStart())

        const res = await agent.Course.searchByName(searchText)

        if (res.data) {
            dispatch(courseSearchSuccess(res.data, searchText))
        } else {
            dispatch(searchError(res.err))
        }

    } catch (err) {
        dispatch(searchError(err))
    }
}

export const searchUniversity = (type, searchText) => async (dispatch) => {
    try {
        dispatch(searchStart())

        const res = await agent.University.searchByName(searchText)

        if (res.data) {
            dispatch(universitySearchSuccess(res.data, searchText))
        } else {
            dispatch(searchError(res.err))
        }

    } catch (err) {
        dispatch(searchError(err))
    }
}