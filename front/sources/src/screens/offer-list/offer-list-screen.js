import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './offer-list-style';
import { offerActions } from '../../redux/actions';
import { Loading, OfferResultHeader, OfferBar, ItemOffer } from '../../components';

class OfferListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resCourseText: '',
      resUniversityText: ''
    };

  }

  static navigationOptions = ({navigation}) => {
    return {
      header: <OfferResultHeader />
    };
  };

  componentWillMount() {
    this.props.fetchListOffer();
  }

  componentDidUpdate(prevProps){
    const isFiltered = this.props.isFiltered;
    const offerIsFiltered = this.props.offer.isFiltered;
    const filter = this.props.filter;
    if(prevProps.isFiltered !== isFiltered) {
      this.props.fetchListOffer(0,filter.qs);
    }
  }

  render() {
    const { isLoading, currentPage, perPage, total, offers } = this.props.offer;
    if (isLoading && offers.length < 1) {
      return <Loading />
    }
    return (
      <View style={styles.container}>
        <OfferBar
          isFiltered={this.props.isFiltered}
          perPage={perPage * currentPage}
          total={total}
          onPress={() => this.props.navigation.navigate('FilterModal')} />
        <FlatList
          data={offers}
          renderItem={({ item }) => {
            return (
              <ItemOffer
                offer={item}
                onPress={() => this.props.navigation.push('OfferDetails', { offerId: item.id })}
              />
            )
          }}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            console.log('paginando: ', currentPage)
            const filter = this.props.filter;
            this.props.fetchListOffer(currentPage, filter.qs, true)
          }}
          
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    offer: state.offer,
    filter: state.filter,
    isFiltered: (Object.keys(state.filter.qs).length > 0)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(offerActions.actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(OfferListScreen)