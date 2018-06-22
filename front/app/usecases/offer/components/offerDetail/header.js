import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import School from '../../../../../assets/img/school.png'
import Arrow from '../../../../../assets/img/arrow_right.png'
import defaultStyles from '../../../../contants/styles'
import { Tags } from "../../../../components/tags";
import {periodsToTime} from "../../../../helpers/time";

export const HeaderDetail = ({navigation}) => {
    return (
        <View >
            <TopImage navigation={navigation}/>
            <OfferInfo />
            <View style={{height: 40, justifyContent: 'center'}}>
                <Tags
                    tags={['presencial', 'noite', '5 anos']}
                    center={true}
                />
            </View>

        </View>
    );
}


const TopImage = ({navigation}) => (
    <View style={styles.imageContainer}>
        <Image style={styles.backgroundImage} source={{uri: 'http://www.slate.com/content/dam/slate/articles/health_and_science/science/2012/07/120712_SCI_NIGHTSKY.jpg.CROP.rectangle3-large.jpg'}}>
        </Image>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Arrow} style={styles.backImage}/>
        </TouchableOpacity>

        <Image source={School} style={styles.detailImage}/>
    </View>
)

const OfferInfo = () => (
    <View style={defaultStyles.centralizedContainer}>
        <Text style={defaultStyles.boldTitle}> Titulo Lindo </Text>
        <Text style={defaultStyles.text}> Descrição linda maravihosa </Text>
    </View>
)


const styles = StyleSheet.create({
    imageContainer: {
        height: 180,
    },
    backgroundImage: {
        height: 140,
    },
    detailImage: {
        height: 100,
        width: 100,
        alignSelf: 'center',
        marginTop: 80,
        backgroundColor: 'black',
        position: 'absolute',
        borderRadius: 20,
    },
    backImage: {
        position: 'absolute',
        margin: 15,
        height: 60,
    },
})