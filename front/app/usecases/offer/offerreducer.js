import { FETCH_OFFERS, DETAIL_OFFER, SET_FILTERS } from './offeractiontypes';

const InitialState = {
  listData: {
    offers: [],
    next_page: 1,
    filtered_size: 0,
    total_size: 0,
    isFetching: false
  },
  offerDetail: {},
  offerFilters: {
    // university_id: 1,
    // course_id: 1,
    // kind: ['Presencial', 'EAD'],
    // shift: ['Manhã', 'Tarde', 'Noite', 'Virtual'],
    // level: ['Graduação', 'Pós-Graduação'],
    // discount_percentage_min: 10.0,
    // offered_price_max: 1500.00
  }
};

export default offerState = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_OFFERS:
      if(action.payload.length == 0) {
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
    default:
      return state;
  }
};
