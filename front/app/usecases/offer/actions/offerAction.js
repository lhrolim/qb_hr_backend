import agent from 'infra/server/superagent'
import * as type from './offerActionTypes'

/**
 * Action to toggle search screen for offers
 */
export const toggleSearch = () =>{

}

//include additional actions here

const fetchOffersListStart = (currentPage) => ({
    type: type.FECTH_OFFERS_LIST_START,
    payload: currentPage
})

const fetchOffersListSuccess = (offersList) => ({
    type: type.FECTH_OFFERS_LIST_SUCCESS,
    payload: offersList,
})

const fetchOffersListError = (err) => ({
    type: type.FECTH_OFFERS_LIST_ERROR,
    payload: err,
})

export const fetchOffersList = (page) => async (dispatch) =>{
    try {
        dispatch(fetchOffersListStart(page))
        const res = await agent.Offer.list(page);
        if (res.err) {
            dispatch(fetchOffersListError(res.err))
        } else {
            dispatch(fetchOffersListSuccess(res.data))
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

export const getOfferDetail = (id) => async (dispatch) =>{
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