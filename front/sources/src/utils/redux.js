
import {
  createReactNavigationReduxMiddleware,
  createNavigationPropConstructor,
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
  'App',
  state => state.nav
);
const navigationPropConstructor = createNavigationPropConstructor('App');

export { middleware, navigationPropConstructor };;