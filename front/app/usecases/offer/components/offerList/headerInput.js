import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import School from '../../../../../assets/img/school.png'
import Place from '../../../../../assets/img/place.png'
import Filter from '../../../../../assets/img/filter.png'
import colors from '../../../../contants/colors'
import filters from '../../../../contants/filters'

export const HeaderInput = ({onPress, universitySearch, courseSearch, openFilter}) => {
    return (
        <View style={{backgroundColor: colors.primaryAccent, paddingTop: 10}}>
            <SingleHeaderInput
                image={School}
                text={courseSearch ? courseSearch : filters.COURSE}
                onPress={() => onPress(filters.COURSE)}
            />
            <SingleHeaderInput
                image={Place}
                text={universitySearch ? universitySearch : filters.UNIVERSITY}
                onPress={() => onPress(filters.UNIVERSITY)}
            />
            <View style={styles.filterContainer}>
                <FilterButton openFilter={() => openFilter()}/>
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

const FilterButton = ({openFilter}) => (
    <TouchableOpacity style={styles.filterButton} onPress={() => openFilter()}>
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