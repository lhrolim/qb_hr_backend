import { offerDetailsActions } from '../../actions';

const initialState = {
  error: null,
  isLoading: false,
  offer: {}
}

export default function offerDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case offerDetailsActions.states.OFFER_DETAILS_RECV_DATA:
      return {
        ...state,
        isLoading: false,
        error: null,
        offer: action.offer
      }
    case offerDetailsActions.states.OFFER_DETAILS_REQ_DATA:
      return {
        ...state,
        isLoading: true,
        error: null,
        offer:{}
      }
    case offerDetailsActions.states.OFFER_DETAILS_REQ_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        offer:{}
      }
    default:
      return state
  }
}