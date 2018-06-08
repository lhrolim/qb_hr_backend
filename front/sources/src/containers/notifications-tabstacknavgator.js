import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import NotificationsScreen from '../screens/notifications/notifications-screen';

const NotificationsTabStackNavigation = createStackNavigator(
  {
    Notifications: { screen: NotificationsScreen }
  }, {
    initialRouteName: 'Notifications'
  }
);

NotificationsTabStackNavigation.navigationOptions = {
  tabBarLabel: 'Notificações',
  tabBarIcon: ({ focused, tintColor }) => {
    return <Ionicons name={focused ? 'ios-megaphone' : 'ios-megaphone-outline' } 
      size={25} color={tintColor} />
  }
};

export default NotificationsTabStackNavigation;