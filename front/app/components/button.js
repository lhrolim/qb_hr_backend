import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


export default Button = ({onPress, title, color, textColor}) => (
    <TouchableOpacity
        style={{
            borderRadius: 5,
            backgroundColor: color ? color : 'green',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onPress={() => onPress()}
    >
        <Text
            style={{
                color: textColor ? textColor : 'white',
                fontSize: 16,
                fontWeight: 'bold',
            }}
        > {title} </Text>
    </TouchableOpacity>
)
