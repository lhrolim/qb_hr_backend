import applicationAction from './application/application-action';
import applicationTypes from './application/application-types';
import offerAction from './offer/offer-action';
import offerTypes from './offer/offer-types';
import offerDetailsAction from './offer-details/offer-details-action';
import offerDetailsTypes from './offer-details/offer-details-types';
import filterAction from './filter/filter-action';
import filterTypes from './filter/filter-types';

const applicationActions = {
  actions: applicationAction,
  states: {
    ...applicationTypes
  }
};

const offerActions = {
  actions: offerAction,
  states: {
    ...offerTypes
  }
}

const offerDetailsActions = {
  actions: offerDetailsAction,
  states: {
    ...offerDetailsTypes
  }
}

const filterActions = {
  actions: filterAction,
  states: {
    ...filterTypes
  }
}

export {
  applicationActions,
  offerActions,
  offerDetailsActions,
  filterActions
};