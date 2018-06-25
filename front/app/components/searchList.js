import React from 'react';
import {TextInput, Text, View, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import colors from '../contants/colors'
import Close from '../../assets/img/close.png'
import defaultStyles from "../contants/styles";

export default class SearchList extends React.Component {

    render() {

        const {
            list,
            onChangeText,
            text,
            clearText,
            onItemSelected,
            type,
            loading,
        } = this.props

        return (
            <View style={styles.container}>
                <CustomInputText
                    clearText={clearText}
                    onChangeText={onChangeText}
                    text={text}
                    type={type}
                />
                <TipDivision/>
                {loading ?
                    <Loading/>
                    :
                    list.length == 0 ?
                        <View style={defaultStyles.centralizedContainer}>
                            <Text style={[defaultStyles.errorPlaceholder, {color: 'white'}]}> Nenhum resultado encontrado </Text>
                        </View>
                        :
                        <FlatList
                            data={list}
                            renderItem={({item}) => (
                                <ListItem item={item} onItemSelected={() => onItemSelected(item)}/>
                            )}
                        />
                }
            </View>
        )

    }
}

const CustomInputText = ({clearText, onChangeText, text, type}) => (
    <View style={styles.inputContainer}>
        <TextInput
            onChangeText={(text) => onChangeText(text)}
            placeholder={type}
            placeholderTextColor={'white'}
            returnKeyType={'search'}
            style={styles.textInput}
            value={text}
            selectionColor={'white'}
        />
        <TouchableOpacity onPress={() => clearText()}>
            <Image source={Close} style={styles.inputIcon}/>
        </TouchableOpacity>

    </View>
)

const Loading = () => (
    <Text style={[styles.itemInput, {fontWeight: 'bold', marginTop: 20}]}> Carregando ...</Text>
)

const TipDivision = () => {
    return (
        <View style={styles.tip}>
            <Text style={styles.tipText}> Digite ao menos 3 caracteres </Text>
        </View>
    )
}

const ListItem = ({item, onItemSelected}) => (
    <TouchableOpacity style={{paddingTop: 10}} onPress={() => onItemSelected()}>
        {item.name && <Text style={[styles.itemInput, {fontWeight: 'bold'}]}> {item.name} </Text>}
        {item.kind && <Text style={styles.itemInput}> {item.kind} </Text>}
        {item.shift && <Text style={styles.itemInput}> {item.shift} </Text>}
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
        marginLeft: 20,
    },
    itemDivider: {
        height: 1,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
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


