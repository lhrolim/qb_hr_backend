import typesFilterActions from './filter-types';


function actived(qs) {
  return {
    type: typesFilterActions.FILTER_ACTIVED,
    qs
  }
};

function reset() {
  return {
    type: typesFilterActions.FILTER_RESET
  }
};

function filterActive(qs) {
  return function (dispatch) {
    dispatch(actived(qs))
  }
}

function filterReset() {
  return function (dispatch) {
    dispatch(reset())
  }
}

export default {
  filterActive,
  filterReset
}