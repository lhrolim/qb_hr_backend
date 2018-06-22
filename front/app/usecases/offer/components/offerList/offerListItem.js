import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Price } from "../../../../components/price";
import {Tags} from "../../../../components/tags";
import ArrowRight from '../../../../../assets/img/arrow_right.png'
import { periodsToTime } from "../../../../helpers/time";

export const OfferListItem = ({item, onPress}) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => onPress(item.id)}
            >
                <View style={style.mainContainer}>
                    <View>
                        <Header
                            image={item.university.logo}
                            title={item.university.name}
                            subtitle={'Bacharelado'}
                        />
                        <Tags
                            tags={[item.course.kind, item.course.shift, periodsToTime(item.course.max_periods)]}
                        />
                        <Text style={[style.text, {marginBottom: 20, marginTop: 10}]}> Campus Unidade Sede (São José dos Campos, SP) </Text>
                        <Price
                            price={item.full_price}
                            offer={item.offered_price}
                            scholarship={item.discount_percentage}
                        />
                    </View>
                    <Image style={style.arrow} source={ArrowRight}/>
                </View>

            </TouchableWithoutFeedback>
        );
}

const Header = ({image, title, subtitle}) => {
    return (
        <View style={[style.horizontalContainer, {marginBottom: 20}]} >
            <Image style={style.image} source={{uri: image}} resizeMode='contain'/>
            <View style={{marginLeft: 20}}>
                <Text style={style.title}> {title} </Text>
                <Text style={style.text}> {subtitle} </Text>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    horizontalContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 70,
        width: 90,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    text: {
        fontSize: 14,
    },
    arrow: {
        alignSelf: 'center',
    },
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        elevation: 1,
        margin: 10,
        padding: 20,
        flexDirection: 'row',
    }
})