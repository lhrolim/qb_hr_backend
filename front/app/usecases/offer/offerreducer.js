import { FETCH_OFFERS, DETAIL_OFFER, SET_FILTERS, REMOVE_FILTER, SET_SUBJECTS, SET_UNIVERSITIES, CLEAR_FILTERS } from './offeractiontypes';

const InitialState = {
  listData: {
    offers: [],
    next_page: 1,
    filtered_size: 0,
    total_size: 0,
    isFetching: false
  },
  offerDetail: {
    course: {}
  },
  offerFilters: {},
  subjects: []
};

export default offerState = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_OFFERS:
      if (action.payload.length == 0) {
        return { ...state, listData: InitialState.listData };
      }
      else if (action.payload.next_page == 1)
        return { ...state, listData: { ...state.listData, ...action.payload } };
      else {
        return {
          ...state,
          listData: {
            offers: [...state.listData.offers, ...action.payload.offers],
            next_page: action.payload.next_page,
            total_size: action.payload.total_size,
            filtered_size: state.listData.filtered_size + action.payload.filtered_size,
            isFetching: false
          }
        };
      }
    case DETAIL_OFFER:
      return { ...state, offerDetail: action.payload };
    case SET_FILTERS:
      return { ...state, offerFilters: { ...state.offerFilters, ...action.payload } };
    case REMOVE_FILTER:
      let newFilter = { ...state.offerFilters };
      delete newFilter[action.payload];
      return { ...state, offerFilters: { ...newFilter } };
    case CLEAR_FILTERS:
      return { ...state, offerFilters: {} };
    case SET_SUBJECTS:
      return { ...state, subjects: action.payload };
    case SET_UNIVERSITIES:
      return { ...state, universities: action.payload };
    default:
      return state;
  }
};
