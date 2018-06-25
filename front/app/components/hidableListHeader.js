import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image } from 'react-native';
import colors from '../contants/colors'
import ExpandMore from '../../assets/img/expand_more.png'
import ExpandLess from '../../assets/img/expand_less.png'

export default class HidableListHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hidden: false,
        }
    }
    render() {

        const {
            children,
            title,
        } = this.props

        const {
            hidden
        } = this.state

        return (
            <View style={{backgroundColor: 'white'}}>
                <View style={styles.container}>
                    <Text style={styles.text}> {title} </Text>
                    <TouchableHighlight onPress={() => this.setState({hidden: !hidden})}>
                        <Image source={hidden ? ExpandMore : ExpandLess} style={styles.icon}/>
                    </TouchableHighlight>
                </View>
                <View style={{padding: 10}}>
                    {!hidden && children}
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 10,
        borderWidth: 1,
        borderColor: colors.lightGray,
    },
    text: {
        flex: 1,
        color: 'black',
        fontSize: 16,
    },
    icon: {
        height: 30,
        width: 30,
    },
})


