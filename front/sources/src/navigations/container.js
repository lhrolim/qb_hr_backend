import { createStackNavigator } from 'react-navigation';
import { fadeIn } from 'react-navigation-transitions';
import MainContainer from '../containers/main-container';
import FilterModalScreen from '../screens/filter/filter-screen';
import AcquireTuitionModalScreen from '../screens/acquire-tuition/acquire-tuition-screen';

const routeConfigs = {
  App: MainContainer,
  FilterModal: FilterModalScreen,
  AcquireTuitionModal: AcquireTuitionModalScreen
};

const navigatorConfig = {
  initialRouteName: 'App',
  transitionConfig: () => fadeIn(),
  node: 'modal', 
  headerMode: 'none'
};

export default createStackNavigator(routeConfigs, navigatorConfig);