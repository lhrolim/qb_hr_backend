import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import OffersTabStackNavigation from './offers-tabstacknavigator';
import InterestsTabStackNavigation from './interests-tabstacknavigator';
import NotificationsTabStackNavigation from './notifications-tabstacknavgator';
import HelpTabStackNavigation from './help-tabstacknavigator';

const routerTabNavigator = {
  OffersTab: OffersTabStackNavigation,
  InterestsTab: InterestsTabStackNavigation,
  NotificationsTab: NotificationsTabStackNavigation,
  HelpTab: HelpTabStackNavigation
};

const configTabNavigator = {
  initialRouteName: 'OffersTab',
  tabBarOptions: {
    showIcon: true,
    showLabel: true
  }
};

export default createBottomTabNavigator(routerTabNavigator, configTabNavigator);