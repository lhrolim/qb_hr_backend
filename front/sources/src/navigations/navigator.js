import React from 'react';
import { connect } from 'react-redux';
import { initializeListeners } from 'react-navigation-redux-helpers';
import { navigationPropConstructor } from '../utils/redux';

import Container from './container';

class Navigator extends React.Component {
  componentDidMount() {
    initializeListeners("App", this.props.nav);
  }

  render() {
    const navigation = navigationPropConstructor(
      this.props.dispatch,
      this.props.nav,
    );
    return (
      <Container navigation={navigation}/>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(Navigator);