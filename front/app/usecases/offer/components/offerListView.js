import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import { OfferListItem } from '../components/offer';
import { styles } from '../styles/default';
import { NavigationActions } from "react-navigation";

export class OfferListView extends PureComponent {
    state = { selected: (new Map(): Map<string, boolean>) };

    _keyExtractor = (item, index) => item.uuid;

    _onPressItem = (id: string) => {
        // updater functions are preferred for transactional updates
        this.setState((state) => {
            // copy the map rather than modifying state.
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id)); // toggle
            return { selected };
        });
        const offerSelected = this.props.data.find(function (o) {
            return o.uuid == id;
        });
        this.props.onItemPress(offerSelected);
    };

    _renderItem = ({ item }) => (
        <OfferListItem
            id={item.uuid}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item.id)}
            offer={item}
        />
    );

    render() {
        return (
            <FlatList
                style={styles.offerList}
                data={this.props.data}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}