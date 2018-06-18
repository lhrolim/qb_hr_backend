import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/default';

export class OfferListHeaderView extends PureComponent {
    render() {
        let paginationData;
        if(this.props.filteredTotal == this.props.total) {
            paginationData = <Text style={styles.offerListHeaderText}>{this.props.total} itens</Text>
        }
        else {
            paginationData = <Text style={styles.offerListHeaderText}>{this.props.filteredTotal} de {this.props.total} itens</Text>
        }
        return (
            <View
                style={styles.offerListHeader}>
                {paginationData}
            </View>
        );
    }
}