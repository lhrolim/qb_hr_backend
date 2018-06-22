import * as type from './offerActionTypes'

const InitialState = {
    offersList: [],
    offerDetail: null,
    offersListLoading: false,
    currentPage: 1,
    err: null,
    errDetail: null,
};

export default offerState = (state = InitialState, action) => {
    switch (action.type) {
        case type.FECTH_OFFERS_LIST_START:
            return {
                ...state,
                loading: true,
                currentPage: action.payload,
                err: null
            }
        case type.FECTH_OFFERS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                offersList: [... state.offersList, ... action.payload],
                err: null
            }
        case type.FECTH_OFFERS_LIST_ERROR:
            return {
                ...state,
                loading: false,
                err: action.payload,
            }
        case type.OFFER_DETAIL_START:
            return {
                ...state,
                loading: true,
                currentPage: action.payload,
                errDetail: null
            }
        case type.OFFER_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                offerDetail: action.payload,
                errDetail: null
            }
        case type.OFFER_DETAIL_ERROR:
            return {
                ...state,
                loading: false,
                errDetail: action.payload,
            }
        default:
            return state;
    }
};
