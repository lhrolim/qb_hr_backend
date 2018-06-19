import React from 'react';
import { View, Text, ListView, RefreshControl } from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import { connect } from 'react-redux';
import { fetchOffers } from "../offeraction";
import { styles } from '../styles/default';

import { OfferListItem } from '../components/offer';
import { OfferListHeaderView } from '../components/offerListViewHeader';

import agent from 'infra/server/superagent'

class OfferListInfiniteView extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: this._rowHasChanged.bind(this),
            }),
        };

        // Update the data store with initial data.
        this.state.dataSource = this.getUpdatedDataSource(this.props);
    }

    async componentWillMount() {
        // Initial fetch for data, assuming that listData is not yet populated.
        this._loadInitialContentAsync();
    }

    componentWillReceiveProps(nextProps) {
        // Trigger a re-render when receiving new props (when redux has more data).
        this.setState({
            dataSource: this.getUpdatedDataSource(nextProps),
        });
    }

    getUpdatedDataSource(props) {
        return this.state.dataSource.cloneWithRows(props.listData.offers);
    }

    _rowHasChanged(r1, r2) {
        return r1.uuid != r2.uuid;
    }

    _renderRefreshControl() {
        return (
            <RefreshControl
                refreshing={this.props.listData.isFetching}
                onRefresh={this._loadInitialContentAsync.bind(this)}
            />
        );
    }

    _loadInitialContentAsync = async () => {
        const result = await agent.Offer.list({ page: 0 });
        this.props.dispatch(fetchOffers(result));
    }

    _loadMoreContentAsync = async () => {
        const result = await agent.Offer.list({ page: this.props.listData.next_page });
        this.props.dispatch(fetchOffers(result));
    }


    _renderItem = (rowData, sectionID, rowID) => {
        return (
            <OfferListItem
                id={rowData.uuid}
                onPressItem={() => this.props.onItemPress(rowData)}
                offer={rowData}
            />
        );
    }

    render() {
        return (
            <View>
                <OfferListHeaderView filteredTotal={this.props.listData.filtered_size} total={this.props.listData.total_size} />
                <ListView
                    style={styles.offerList}
                    renderScrollComponent={props => <InfiniteScrollView {...props} />}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderItem}
                    refreshControl={this._renderRefreshControl()}
                    canLoadMore={!!this.props.listData.next_page}
                    onLoadMoreAsync={this._loadMoreContentAsync.bind(this)}
                    enableEmptySections={true}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { listData: state.offerReducer.listData };
};

export default connect(mapStateToProps)(OfferListInfiniteView);