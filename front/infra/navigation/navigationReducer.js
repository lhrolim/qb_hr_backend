import AppNavigator from "./navigationStack";

const INITIAL_PAGE = "offerlist";

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams(INITIAL_PAGE)
);
const navigationReducer = (state = initialState, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navigationReducer;
