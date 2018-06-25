import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import School from '../../../../../assets/img/school.png'
import Arrow from '../../../../../assets/img/arrow_right.png'
import defaultStyles from '../../../../contants/styles'
import {Tags} from "../../../../components/tags";
import {periodsToTime} from "../../../../helpers/time";

export const HeaderDetail = ({tags, logo, name, description}) => {
    return (
        <View>
            <TopImage logo={logo}/>
            <OfferInfo name={name} description={description}/>
            <View style={{height: 40, justifyContent: 'center'}}>
                {tags && <Tags
                    tags={tags}
                    center={true}
                />
                }
            </View>

        </View>
    );
}


const TopImage = ({logo}) => (
    <View style={styles.imageContainer}>
        <Image style={styles.backgroundImage}
               source={{uri: 'http://www.slate.com/content/dam/slate/articles/health_and_science/science/2012/07/120712_SCI_NIGHTSKY.jpg.CROP.rectangle3-large.jpg'}}>
        </Image>
        <Image source={{uri: logo}} style={styles.detailImage} resizeMode='cover'/>
    </View>
)

const OfferInfo = ({name, description}) => (
    <View style={defaultStyles.centralizedContainer}>
        <Text style={defaultStyles.boldTitle}> {name} </Text>
        {description && <Text style={defaultStyles.text}> {description} </Text>}
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
        position: 'absolute',
        borderRadius: 20,
    },
})