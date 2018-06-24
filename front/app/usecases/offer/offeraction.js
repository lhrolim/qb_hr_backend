import agent from 'infra/server/superagent'
import { formatFiltersToQueryParams } from '../../helpers/format'
import { NavigationActions } from "react-navigation";
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
    const courses = []
    const coursesSet = new Set()
    const fullCourses = await agent.Course.list();
    const fullUniversities = await agent.University.list();
    const universities = fullUniversities.map(item => ({id: `${item.id}`, name: item.name}))
    fullCourses.map(item => coursesSet.add(item.name))
    coursesSet.forEach(item => courses.push({id: item, name: item}))
    const data = { courses, universities }
    dispatch({type: MOUNT_FILTER_FIELDS, data});
  }
}

export const applyFilters = filters => {
  filters.offset = 0
  return dispatch => dispatch({type: APPLY_FILTERS, filters})
}

export const searchScreen = () => NavigationActions.navigate({routeName: "offersearch"})
export const listScreen = () => NavigationActions.navigate({routeName: "offerlist"})
export const detailScreen = () => NavigationActions.navigate({routeName: "offerdetail"})
