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
        const list = await agent.Offer.list(page);
        dispatch(fetchOffersListSuccess(list))
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
        const offer = await agent.Offer.detail(id);
        dispatch(offerDetailSuccess(offer))
    } catch (err) {
        dispatch(offerDetailError(err))
    }
}