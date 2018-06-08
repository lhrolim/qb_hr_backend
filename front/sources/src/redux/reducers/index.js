import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import Container from '../../navigations/container'

import application from './application/application-reducer';
const navReducer = createNavigationReducer(Container);
import filterReducer from './filter/filter-reducer';
import offerReducer from './offer/offer-reducer';
import offerDetailsReducer from './offer-details/offer-details-reducer';

export default combineReducers({
  application,
  nav: navReducer,
  filter: filterReducer,
  offer: offerReducer,
  offerDetails: offerDetailsReducer,
});