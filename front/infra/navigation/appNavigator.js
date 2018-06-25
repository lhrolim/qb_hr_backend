import React, {Component} from "react";
import {connect} from "react-redux";
import {addNavigationHelpers} from "react-navigation";
import NavigationStack from "./navigationStack";
import { BackHandler } from "react-native";
import { NavigationActions } from "react-navigation";
// import new redux helpers
import {
    createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';

const addListener = createReduxBoundAddListener("root");

class AppNavigation extends Component {

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", () => this.onBackPress());
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", () => this.onBackPress());
    }

    onBackPress = () => {
        const {navigationState, dispatch} = this.props;

        if (navigationState.index === 0) {
            return false;
        }

        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const {navigationState, dispatch} = this.props;
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