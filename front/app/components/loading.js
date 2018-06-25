import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import colors from '../contants/colors'

export default class Loading extends React.Component {

    render() {

        const { show } = this.props
        if (show) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color={colors.primaryAccent}/>
                </View>
            )
        } else{
            return (<View/>)
        }

    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
})


