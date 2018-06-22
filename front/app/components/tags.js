import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../contants/colors'

export const Tags = ({tags, center}) => {
    return (
        <View style={center ? [styles.container, {justifyContent: 'center'}] : styles.container}>
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
        backgroundColor: colors.lightGray,
        color: colors.gray,
        fontSize: 12,
        marginRight: 10,
        borderRadius: 10,
    }
})