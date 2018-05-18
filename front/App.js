import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import store from './infra/core/store'
import AppWithNavigationState from './infra/navigation/AppNavigator'

import {
  StackNavigator,
} from 'react-navigation';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
       <AppWithNavigationState />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
