import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {HeaderDetail} from "../components/offerDetail/header";
import defaultStyles from '../../../contants/styles'
import {Price} from '../../../components/price'
import Button from '../../../components/button'
import {connect} from "react-redux";
import {getOfferDetail} from "../actions/offerAction";
import {periodsToTime} from "../../../helpers/time";
import Loading from '../../../components/loading'

class OfferDetail extends Component {

    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: 'white'
    };

    componentWillMount() {
        this.props.getOfferDetail(this.props.navigation.state.params.id)
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.errDetail) {
            this.props.navigation.goBack()
            alert('Ocorreu um erro, por favor tente novamente.')
        }
    }

    render() {

        const {
            offerDetail,
            loading,
        } = this.props

        let course
        let university
        if (offerDetail) {
            course = offerDetail.course
            university = offerDetail.university
        }

        return (
            <View style={{flex: 1}}>
                <Loading show={loading}/>
                {offerDetail &&
                <View style={{justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'white'}}>

                    <ScrollView
                    >
                        <HeaderDetail
                            tags={course ?
                                [course.kind, course.shift, periodsToTime(course.max_periods)] :
                                null
                            }
                            logo={university && university.logo}
                            name={university && university.name}
                            description={university && university.description}
                        />
                        <OfferBody
                            courseName={course && offerDetail.course.name}
                            courseDescription={course && course.description}
                        />

                    </ScrollView>

                    <DetailFooter
                        price={offerDetail.full_price}
                        offer={offerDetail.offered_price}
                        discount={offerDetail.discount_percentage}
                    />
                </View>
                }
            </View>


        );
    }
}

const OfferBody = ({courseName, courseDescription}) => (
    <View style={{padding: 20, paddingBottom: 160}}>
        <Text style={defaultStyles.boldText}> Sobre {courseName}</Text>
        <Text
            style={defaultStyles.text}> {courseDescription} </Text>
    </View>
)

const DetailFooter = ({price, offer, discount}) => (
    <View style={styles.footerContainer}>
        <Price
            price={price}
            offer={offer}
            scholarship={discount}
        />
        <Text style={defaultStyles.boldText}> Uma economia de {price - offer} reais</Text>
        <Button title={'Quero essa Bolsa'} onPress={() => console.log('click')}/>
    </View>
)

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: 'white',
        height: 150,
        width: '100%',
        position: 'absolute',
        padding: 15,
    }
})

function mapStateToProps(state) {
    return {
        offerDetail: state.offerReducer.offerDetail,
        errDetail: state.offerReducer.errDetail,
        loading: state.offerReducer.loadingDetail,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getOfferDetail: (id) => dispatch(getOfferDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetail);
