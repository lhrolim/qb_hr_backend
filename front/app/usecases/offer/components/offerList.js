import React from 'react';
import { View, FlatList } from 'react-native';
import { OfferListItem } from './offerListItem';

export const OfferList = ({list, fetchMoreOffers}) => {
    return (
        <FlatList
            data={list}
            renderItem={({ item }) => (
                <OfferListItem item={item}/>
            )}
            onEndReached={() => fetchMoreOffers()}
            onEndTreshhold={0}
        />
    );
}