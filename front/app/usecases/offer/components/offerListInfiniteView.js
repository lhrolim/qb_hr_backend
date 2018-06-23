import React from 'react';
import { View, Text, ListView, RefreshControl } from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import { connect } from 'react-redux';
import { fetchOffers } from "../offeraction";
import { styles } from '../styles/default';

import { OfferListItem } from '../components/offerListViewItem';
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
        this._loadInitialContentAsync();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.offerFilters !== this.props.offerFilters) {
            this._loadInitialContentAsync();
        }
    }

    componentWillReceiveProps(nextProps) {
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
        const result = await agent.Offer.list({ ...this.props.offerFilters, page: 0 });
        this.refs._listView.scrollTo({y: 0, x: 0, animated: true});
        this.props.dispatch(fetchOffers(result));
    }

    _loadMoreContentAsync = async () => {
        const result = await agent.Offer.list({ ...this.props.offerFilters, page: this.props.listData.next_page });
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
            <View style={styles.offerListBackground}>
                <OfferListHeaderView 
                    onPress={this.props.onHeaderPress}
                    filteredTotal={this.props.listData.filtered_size}
                    total={this.props.listData.total_size} 
                />
                <ListView
                    ref="_listView"
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
    return {
        listData: state.offerReducer.listData,
        offerFilters: state.offerReducer.offerFilters
    };
};

export default connect(mapStateToProps)(OfferListInfiniteView);