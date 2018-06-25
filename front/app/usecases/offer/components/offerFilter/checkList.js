import React from 'react';
import { CheckBox, View, Text, StyleSheet, Switch, Platform } from 'react-native';

export default class CheckList extends React.Component {

    onValueChange(item) {
        item.checked = !item.checked //This points to the original array, so this change happens there!
        this.props.onValueChange()
    }

    render() {

        const {
            list
        } = this.props

        return (
            <View style={{padding: 15}}>
                {list.map((item) => {
                    return <Cell
                        onValueChange={() => this.onValueChange(item)}
                        text={item.title}
                        checked={item.checked}
                    />
                })}
            </View>

        );
    }


}

const Cell = ({onValueChange, text, checked}) => (
    <View style={styles.cellContainer}>
        {
            Platform.OS === 'ios' ?
                <Switch
                    onValueChange={(check) => onValueChange(check)}
                    value={checked}
                />
                :
                <CheckBox
                    onValueChange={(check) => onValueChange(check)}
                    value={checked}
                />

        }

        <Text style={styles.cellText}>{text}</Text>
    </View>
)

const styles = StyleSheet.create({
    cellContainer: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    cellText: {
        color: 'black',
        fontSize: 14,
        flex: 1,
        marginLeft: 40,
    },
    checkBox: {
        borderRadius: 10,
        height: 25,
        width: 25
    }
})
