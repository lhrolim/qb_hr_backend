import React, { Component } from "react";
import { connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";
import NavigationStack from "./navigationStack";

// import new redux helpers
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';

const addListener = createReduxBoundAddListener("root");

class AppNavigation extends Component {


  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <NavigationStack
        navigation={{
          dispatch: dispatch,
          state: navigationState,
          addListener,
       }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    navigationState: state.navigationReducer
  };
};

export default connect(mapStateToProps)(AppNavigation);
