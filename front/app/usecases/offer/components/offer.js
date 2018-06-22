import React, { PureComponent } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles/default';

export class OfferListItem extends PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        const offer = this.props.offer;
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.offerCard}>
                    <Image style={styles.universityLogo} source={{ uri: offer.university.logo }} resizeMode="contain" />
                    <Text style={styles.strikeThrough}>
                        {offer.discount_percentage}%
                    </Text>
                    <Text>{offer.course.name}</Text>
                    <Text>{offer.offered_price}</Text>
                    <Text>{offer.course.shift}</Text>
                    <Text>{offer.course.level}</Text>
                    <Text>{offer.course.kind}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}