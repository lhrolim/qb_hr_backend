import { fieldsInitialState, filtersInitialState } from './state'
import {
  LIST_OFFERS,
  MOUNT_FILTER_FIELDS,
  APPLY_FILTERS,
  DETAIL_OFFER,
  FETCHING_DATA,
  APPLY_FIELDS,
} from './offerTypes'

const InitialState = {
  fields: fieldsInitialState,
  filters: filtersInitialState,
  offers: [],
  total: '',
  loading: false,
  currentCourse: {},
  offer: {},
};

export default offerReducer = (state = InitialState, action) => {
  switch (action.type) {
    case LIST_OFFERS:
      const offers = state.offers.length === 0 ? action.data.offers : state.offers.concat(action.data.offers)
      return { ...state, offers, loading: false, total: action.data.total };
    case DETAIL_OFFER:
      return { ...state, offer: action.data, loading: false };
    case MOUNT_FILTER_FIELDS:
      const fields = state.fields
      Object.keys(action.data).forEach(key => fields[key] = action.data[key])
      return { ...state, fields, loading: false};
    case APPLY_FILTERS:
      return { ...state, filters: action.filters, offers: [] };
    case APPLY_FIELDS:
      return { ...state, fields: action.fields };
    case FETCHING_DATA:
      return { ...state, loading: true };
    default:
      return state;
  }
};
