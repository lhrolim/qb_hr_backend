import React from 'react';
import { View, Text } from 'react-native';

export const OfferListItem = ({item}) => {
        return (
            <View
                style={{
                    flex: 1,
                    marginTop: 100,
                    marginBottom: 100,
                }}
            >
                <Text>{item.description}</Text>
            </View>
        );
}