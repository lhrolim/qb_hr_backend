import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/default';

export class OfferListHeaderView extends PureComponent {
    render() {
        return (
            <View
                style={styles.offerListHeader}>
                <Text style={styles.offerListHeaderText}>{this.props.filteredTotal} de {this.props.total} itens</Text>
            </View>
        );
    }
}