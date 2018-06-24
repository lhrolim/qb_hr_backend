import agent from 'infra/server/superagent'
import { formatFiltersToQueryParams } from '../../helpers/format'
import { NavigationActions } from "react-navigation";
import { fieldsInitialState } from './state'
import {
  LIST_OFFERS,
  MOUNT_FILTER_FIELDS,
  APPLY_FILTERS,
  DETAIL_OFFER,
  FETCHING_DATA,
} from './offerTypes'


export const listOffers = filters => {
  return async dispatch => {
    const queryParams = formatFiltersToQueryParams(filters)
    const data = await agent.Offer.list(queryParams);
    dispatch({type: LIST_OFFERS, data});
  }
}

export const fetchingData = () => {
  return dispatch => dispatch({type: FETCHING_DATA});
}

export const detailOffer = id => {
  return async dispatch => {
    const data = await agent.Offer.detail(id);
    dispatch({type: DETAIL_OFFER, data});
  }
}

export const mountFilterFields = () => {
  return async dispatch => {
    const courses = await agent.Course.list();
    const universities = await agent.University.list();
    const data = { courses, universities }
    dispatch({type: MOUNT_FILTER_FIELDS, data});
  }
}

export const resetFields = () => {
  return dispatch => dispatch({type: APPLY_FIELDS, fields: fieldsInitialState})
}

export const applyFilters = filters => {
  return dispatch => dispatch({type: APPLY_FILTERS, filters})
}

export const searchScreen = () => NavigationActions.navigate({routeName: "offersearch"})
export const listScreen = () => NavigationActions.navigate({routeName: "offerlist"})
export const detailScreen = () => NavigationActions.navigate({routeName: "offerdetail"})
