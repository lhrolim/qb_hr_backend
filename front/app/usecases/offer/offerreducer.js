import * as type from './offerActionTypes'

const InitialState = {
    offersList: [],
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
        default:
            return state;
    }
};
