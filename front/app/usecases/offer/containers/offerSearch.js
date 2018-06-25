import React, {Component} from 'react';
import {View} from 'react-native';
import SearchList from '../../../components/searchList'
import colors from "../../../contants/colors";
import {connect} from "react-redux";
import filters from '../../../contants/filters'

import {searchCourses, fetchOffersList, searchUniversity} from "../actions/offerAction";


class OfferSearch extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: colors.primaryAccent
        },
        headerTintColor: 'white',
    };

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            type: props.navigation.state.params && props.navigation.state.params.type,
            search: null,
            searchResults: [],
        }
    }

    componentWillMount() {
        const {type} = this.state
        this.setupComponent(this.props, type)
    }

    componentWillReceiveProps(props) {
        const {type} = this.state
        if (props.err) {
            alert('Ocorreu um erro ao buscar, por favor tente novamente.')
        } else if (!props.loading) {
            this.setupComponent(props, type)
        }
    }

    componentDidMount() {
        this.searchByType(this.state.type, '')
    }

    setupComponent(props, type) {
        switch (type) {
            case filters.COURSE:
                this.setState({text: props.courseName, searchResults: props.courses})
                break;
            case filters.UNIVERSITY:
                this.setState({text: props.universityName, searchResults: props.universities})
                break;
            default:
                this.setState({text: props.courseName, searchResults: props.courses})
                break;
        }
    }

    onTextChange(text) {
        const {search} = this.state
        if (search) clearTimeout(search)
        let timer
        if (text.length > 2) {
            timer = setTimeout(() => {
                this.searchByType(this.state.type, text)
            }, 1000)
        }
        this.setState({text, search: timer})
    }

    onItemSelected(item) {
        let filter = {}
        switch (this.state.type) {
            case filters.COURSE:
                filter.course = item
                break
            case filters.UNIVERSITY:
                filter.university = item
                break
            default:
                filter.course = item
                break
        }
        this.props.fetchOffersList(filter)
    }

    searchByType(type, text) {
        switch (type) {
            case filters.COURSE:
                this.props.searchCourses(type, text)
                break
            case filters.UNIVERSITY:
                this.props.searchUniversity(type, text)
                break
            default:
                this.props.searchCourses(type, text)
                break
        }
    }

    render() {

        const {
            text,
            type,
            searchResults,
        } = this.state

        const {
            loading,
        } = this.props

        return (
            <SearchList
                list={searchResults}
                onChangeText={(text) => this.onTextChange(text)}
                text={text}
                clearText={() => this.setState({text: ''})}
                onItemSelected={(item) => this.onItemSelected(item)}
                type={type}
                loading={loading}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        courses: state.offerReducer.courses,
        universities: state.offerReducer.universities,
        courseName: state.offerReducer.courseSearch,
        universityName: state.offerReducer.universitySearch,
        loading: state.offerReducer.loadingSearch,
        err: state.offerReducer.errSearch
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchCourses: (type, searchText) => dispatch(searchCourses(type, searchText)),
        searchUniversity: (type, searchText) => dispatch(searchUniversity(type, searchText)),
        fetchOffersList: (filter) => dispatch(fetchOffersList(filter, null, true))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferSearch);
