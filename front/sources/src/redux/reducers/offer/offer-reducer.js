import { offerActions } from '../../actions';

const initialState = {
  error: null,
  isLoading: false,
  isFiltered: false,
  refreshing: false,
  isFiltered: false,
  currentPage: 0,
  perPage: 0,
  total: 0,
  offers: []
}

export default function offerReducer(state = initialState, action) {
  switch (action.type) {
    case offerActions.states.OFFER_RECV_REFRESH_DATA:
      return {
        ...state,
        isLoading: false,
        refreshing: true,
        error: null,
        currentPage: action.pages.current,
        perPage: action.offers.length,
        total: action.pages.total,
        offers: action.offers
      }
    case offerActions.states.OFFER_RECV_SCROLL_DATA:
      if (action.offers.length > 0) {
        return {
          ...state,
          isLoading: false,
          refreshing: false,
          error: null,
          currentPage: action.pages.current,
          perPage: action.offers.length,
          total: action.pages.total,
          offers: [...state.offers, ...action.offers]
        }
      }
      return state;
    case offerActions.states.OFFER_RECV_FILTERED_DATA:
      return {
        isLoading: false,
        isFiltered: true,
        refreshing: false,
        error: null,
        currentPage: action.pages.current,
        perPage: action.offers.length,
        total: action.pages.total,
        offers: action.offers
      }
    case offerActions.states.OFFER_RECV_DATA:
      return {
        isLoading: false,
        isFiltered: false,
        refreshing: false,
        error: null,
        currentPage: action.pages.current,
        perPage: action.offers.length,
        total: action.pages.total,
        offers: action.offers
      }
    case offerActions.states.OFFER_REQ_DATA:
      return {
        ...state,
        isLoading: true,
        isFiltered: false,
        refreshing: false,
        error: null
      }
    case offerActions.states.OFFER_REQ_ERROR:
      return {
        ...state,
        isLoading: false,
        isFiltered: false,
        refreshing: false,
        error: action.error
      }
    default:
      return state
  }
}