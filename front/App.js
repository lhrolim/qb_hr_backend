import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Provider } from "react-redux";
import store from "./infra/core/store";
import AppWithNavigationState from "./infra/navigation/appNavigator";
import { SUPRESS_WARNINGS } from "./app/contants";

import { StackNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    console.disableYellowBox = SUPRESS_WARNINGS;
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
