import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Tags = ({tags}) => {
    console.log(tags)
    return (
        <View style={styles.container}>
            {
                tags.map((item) => (
                    <Text style={styles.tag}> {item.toUpperCase()} </Text>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    tag: {
        padding: 4,
        backgroundColor: '#eaebed',
        color: 'gray',
        fontSize: 12,
        marginRight: 10,
        borderRadius: 10,
    }
})