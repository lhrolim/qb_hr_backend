import React, { PureComponent } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import FitImage from 'react-native-fit-image';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from '../styles/default';

export class OfferListItem extends PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        const offer = this.props.offer;
        const formattedPeriod = `${offer.course.max_periods / 2} ANOS`;
        const formattedDiscount = Number(offer.discount_percentage).toFixed(0);
        const priceFormatter = {
            format: (price) => {
                return `R$ ${Number(price).toFixed(2).replace('.', ',')}`;
            }
        };
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.offerCard}>
                    <View style={styles.offerCardContent}>
                        <View style={styles.offerCardHeader}>
                            <FitImage style={styles.universityLogo} source={{ uri: offer.university.logo }} resizeMode="contain" />
                            <Text style={styles.universityName}>{offer.university.name}</Text>
                        </View>
                        <View style={styles.offerCardBody}>
                            <Text style={styles.courseName}>{offer.course.name}</Text>
                            <Text style={styles.offerCardText}>{offer.course.level.toUpperCase()}</Text>
                            <View style={styles.offerCardInfoContainer}>
                                <Text style={styles.offerCardText}>
                                    {offer.course.kind.toUpperCase()}
                                </Text>
                                <Text style={styles.offerCardText}>
                                    {offer.course.shift.toUpperCase()}
                                </Text>
                                <Text style={styles.offerCardText}>
                                    {formattedPeriod}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.offerCardFooter}>
                            <View style={styles.offerDiscount}>
                                <Text style={styles.offerDiscountNumber}>{formattedDiscount}%</Text>
                                <Text style={styles.offerDiscountText}>de bolsa</Text>
                            </View>
                            <View style={styles.offerPrices}>
                                <Text style={styles.offerDiscountPrice}>{priceFormatter.format(offer.offered_price)}/mês</Text>
                                <Text style={styles.offerPrice}>{priceFormatter.format(offer.full_price)}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.offerCardArrow}>
                        <Icon name="chevron-right" style={styles.offerCardArrowIcon} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}