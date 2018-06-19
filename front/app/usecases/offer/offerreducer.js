import { FETCH_OFFERS } from './offeractiontypes';

const InitialState = {
  listData: {
    offers: [],
    next_page: 1,
    filtered_size: 0,
    total_size: 0,
    isFetching: false
  }
};

export default offerState = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_OFFERS:
      if (action.payload.next_page == 1)
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

    default:
      return state;
  }
};
