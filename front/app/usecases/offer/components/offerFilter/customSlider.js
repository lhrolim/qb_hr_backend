import React from 'react';
import { Slider, View, Text } from 'react-native';

export default class CustomSlider extends React.Component {

    render() {

        const {
            value,
            onValueChange,
            maxValue,
            text,
        } = this.props

        return (
            <View style={{padding: 15}}>
                <Slider
                    maximumValue={maxValue}
                    value={Number(value)}
                    onValueChange={(value) => onValueChange(value.toFixed(0))}
                />
                <Text>{text}</Text>
            </View>

        );
    }
}
