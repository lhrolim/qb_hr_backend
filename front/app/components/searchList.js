import React from 'react';
import {TextInput, Text, View, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import colors from '../contants/colors'
import Close from '../../assets/img/close.png'

export default class SearchList extends React.Component {

    render() {

        const {
            list,
            onChangeText,
            text,
            clearText,
            onItemSelected,
        } = this.props

        return (
            <View style={styles.container}>
                <CustomInputText
                    clearText={clearText}
                    onChangeText={onChangeText}
                    text={text}
                />
                <TipDivision />
                <FlatList
                    data={list}
                    renderItem={({ item }) => (
                        <ListItem text={item} onItemSelected={() => onItemSelected(item)}/>
                    )}
                />
            </View>
        )

    }
}

const CustomInputText = ({clearText, onChangeText, text}) => (
    <View style={styles.inputContainer}>
        <TextInput
            onChangeText={(text) => onChangeText(text)}
            placeholderTextColor={'white'}
            returnKeyType={'search'}
            style={styles.textInput}
            value={text}
        />
        <TouchableOpacity onPress={() => clearText()}>
            <Image source={Close} style={styles.inputIcon}/>
        </TouchableOpacity>

    </View>
)

const TipDivision = () => {
    return (
        <View style={styles.tip}>
            <Text style={styles.tipText}> Digite ao menos 3 caracteres </Text>
        </View>
    )
}

const ListItem = ({text, onItemSelected}) => (
    <TouchableOpacity onPress={() => onItemSelected()}>
        <Text style={styles.itemInput}> {text} </Text>
        <View style={styles.itemDivider}/>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryAccent,
        flex: 1,
    },
    textInput: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        padding: 20,
        flex: 1,
    },
    tipText: {
        fontSize: 14,
        color: colors.primaryAccent,
        marginLeft: 15,
    },
    tip: {
        backgroundColor: 'white',
        padding: 5,
    },
    itemInput: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        padding: 20,
        marginLeft: 15,
        padding: 15,
    },
    itemDivider: {
        height: 1,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    inputIcon: {
        marginRight: 20,
        height: 30,
        width: 30,
    }
})


