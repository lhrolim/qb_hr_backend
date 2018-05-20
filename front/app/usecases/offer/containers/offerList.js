import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

class OfferList extends Component {
    

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };

    componentWillMount(){
        //TODO: bring initial list
    }

    render() {
        return (
            <View
        style={{
          flex: 1,
          backgroundColor: "yellowgreen",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>1</Text>
        <View style={{ height: 100, flexDirection: "row" }}>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{ textDecorationLine: "underline", fontWeight: "600" }}
            >
              INCREMENT
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{ textDecorationLine: "underline", fontWeight: "600" }}
            >
              DECREMENT
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            paddingHorizontal: 40,
            backgroundColor: "indigo"
          }}
          onPress={this.navigate}
        >
          <Text style={{ fontSize: 23, fontWeight: "600", color: "white" }}>
            Screen2
          </Text>
        </TouchableOpacity>
      </View>
        );
    }
}

export default OfferList;

