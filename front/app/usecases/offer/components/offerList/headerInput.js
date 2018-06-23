import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import School from '../../../../../assets/img/school.png'
import Place from '../../../../../assets/img/place.png'
import Filter from '../../../../../assets/img/filter.png'
import colors from '../../../../contants/colors'

export const HeaderInput = ({onPress}) => {
    return (
        <View style={{backgroundColor: colors.primaryAccent, paddingTop: 10}}>
            <SingleHeaderInput image={School} text={'O que você quer estudar?'} onPress={() => onPress('course')}/>
            <SingleHeaderInput image={Place} text={'Onde você quer estudar?'} onPress={() => onPress('university')}/>
            <View style={styles.filterContainer}>
                <FilterButton />
            </View>
        </View>
    );
}


const SingleHeaderInput = ({image, text, onPress}) => (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
        <Image style={styles.image} source={image}/>
        <Text style={styles.text}> {text} </Text>
    </TouchableOpacity>
)

const FilterButton = () => (
    <TouchableOpacity style={styles.filterButton}>
        <Image style={styles.image} source={Filter}/>
        <Text> Filtros </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: colors.secondaryAccent,
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        padding: 15,
    },
    image: {
        height: 25,
        width: 25,
    },
    text: {
        color: 'white',
        fontSize: 14,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    filterContainer: {
        backgroundColor: 'white',
        height: 50,
        paddingLeft: 15,
        elevation: 1,
    },
    filterButton: {
        height: 40,
        margin: 5,
        padding: 2,
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: colors.lightGray,
        alignItems: 'center',
        alignSelf: 'baseline'
    }
})