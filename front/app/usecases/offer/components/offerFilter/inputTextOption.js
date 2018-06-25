import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default InputTextOption = ({onPress, text, image}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress()}>
            <Text style={styles.text}> {text} </Text>
            <Image style={styles.image} source={image}/>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
    image: {
        height: 25,
        width: 25,
        tintColor: 'black',
    },
    text: {
        color: 'black',
        fontSize: 14,
        flex: 1,
    },
})