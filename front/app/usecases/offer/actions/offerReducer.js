import * as type from './offerActionTypes'

const InitialState = {
    offersList: [],
    offerDetail: null,
    offersListLoading: false,
    currentPage: 1
};

export default offerState = (state = InitialState, action) => {
    switch (action.type) {
        case type.FECTH_OFFERS_LIST_START:
            return {
                ...state,
                loading: true,
                currentPage: action.payload
            }
        case type.FECTH_OFFERS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                offersList: [... state.offersList, ... action.payload],
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
                currentPage: action.payload
            }
        case type.OFFER_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                offerDetail: action.payload,
            }
        case type.OFFER_DETAIL_ERROR:
            return {
                ...state,
                loading: false,
                err: action.payload,
            }
        default:
            return state;
    }
};
