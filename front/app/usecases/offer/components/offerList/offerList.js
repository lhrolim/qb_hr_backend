import React from 'react';
import { View, FlatList } from 'react-native';
import { OfferListItem } from './offerListItem';

export class OfferList extends React.Component {


    render() {
        const {list, fetchMoreOffers, openOfferDetail, onRefresh ,loading} = this.props
        return (
            <FlatList
                data={list}
                renderItem={({ item }) => (
                    <OfferListItem
                        item={item}
                        onPress={(id) => openOfferDetail(id)}
                    />
                )}
                onEndReached={() => fetchMoreOffers()}
                onEndTreshhold={0}
                onRefresh={() => onRefresh()}
                refreshing={loading ? loading : false}
            />
        );
    }
}