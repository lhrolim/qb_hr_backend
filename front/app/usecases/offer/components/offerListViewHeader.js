import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../styles/default';

export class OfferListHeaderView extends PureComponent {
    render() {
        return (
            <View
                style={styles.offerListHeader}>
                <TouchableOpacity style={{flexDirection: 'row'}} onPress={this.props.onPress}>
                    <Text style={styles.offerListHeaderText}>Filtros</Text>
                    <Icon name="chevron-right" style={styles.filterArrow} />
                </TouchableOpacity>
                <Text style={styles.offerListHeaderText}>{this.props.filteredTotal} de {this.props.total} itens</Text>
            </View>
        );
    }
}