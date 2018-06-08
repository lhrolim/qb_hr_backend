import React from 'react';
import { View, TouchableOpacity, Animated, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './style';

class FilterItem extends React.Component {
  constructor(props) {
    super(props);
    this.arrow = {
      'up': "expand-less",
      'down': "expand-more"
    };
    this.state = {
      expanded: true,
      maxHeight: 0,
      minHeight: 0
    };

  }

  componentWillMount() {
    this.setState({
      animation: new Animated.Value()
    });
  }

  toggle() {
    let initialValue = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
      finalValue = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;


    this.setState({ expanded: !this.state.expanded });
    this.state.animation.setValue(initialValue);

    Animated.spring(this.state.animation, { toValue: finalValue }).start();
  }

  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height
    });
  }

  _setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height
    });
  }

  render() {
    let arrowIcon = this.state.expanded ? this.arrow['up'] : this.arrow['down'];
    return (
      <Animated.View style={[styles.container, { height: this.state.animation }]}>
        <View onLayout={this._setMinHeight.bind(this)} >
          <View style={styles.header}>
            <View style={styles.title}>
              <Text style={styles.titleTxt}>{this.props.title}</Text>
            </View>
            <TouchableOpacity
              style={styles.arrowBtn}
              onPress={this.toggle.bind(this)}
              underlayColor="#f1f1f1">
              <Icon name={arrowIcon} size={25} color='#7dd7ff' />
            </TouchableOpacity>
          </View>
        </View>
        <View onLayout={this._setMaxHeight.bind(this)}>
          <View style={styles.body}>
            <TextInput
              underlineColorAndroid='transparent'
              placeholder={this.props.placeholder}
              style={styles.textInput}
              onChangeText={(text) => {
                this.setState({ text })
                this.props.onChangeText(text)
                }}
              value={this.props.text}
            />
          </View>
        </View>
      </Animated.View >
    );
  }
}

FilterItem.propTypes = {
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  text: PropTypes.string
}

export default FilterItem;
