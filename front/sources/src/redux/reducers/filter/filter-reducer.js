import { filterActions } from '../../actions';

const initialState = {
  qs: {}
}

export default function offerDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case filterActions.states.FILTER_ACTIVED:
      return {
        ...state,
        qs: action.qs
      }
    case filterActions.states.FILTER_RESET:
      return {
        ...state,
        qs:{}
      }
    default:
      return state
  }
}