import React from 'react';
import { View, FlatList } from 'react-native';
import { OfferListItem } from './offerListItem';

export const OfferList = ({list, fetchMoreOffers, openOfferDetail}) => {
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
        />
    );
}