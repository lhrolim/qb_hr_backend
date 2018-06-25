import * as type from './offerActionTypes'
import {clearFilters} from "../../../contants/filters";

const InitialState = {
    offersList: [],
    offerDetail: null,
    offersListLoading: false,
    err: null,
    errDetail: null,
    loading: false,
    loadingDetail: false,
    loadingSearch: false,
    courseSearch: '',
    universitySearch: '',
    errSearch: false,
    courses: [],
    universities: [],
    filter: {
        page: 1,
        kind: {
            presencial: {
                title: 'Presencial',
                checked: false
            },
            ead: {
                title: 'EAD',
                checked: false
            }
        },
        shift: {
            manha: {
                title: 'Manhã',
                checked: false
            },
            tarde: {
                title: 'Tarde',
                checked: false
            },
            noite: {
                title: 'Noite',
                checked: false
            }
        },
        level: {
            graduacao: {
                title: 'Graduação',
                checked:
                    false
            }
            ,
            pos: {
                title: 'Pós-Graduação',
                checked:
                    false
            }
        }
    },
};

export default offerState = (state = InitialState, action) => {
    switch (action.type) {
        case type.FECTH_OFFERS_LIST_START:
            return {
                ...state,
                loading: true,
                err: null,
                filter: {
                    ...state.filter,
                    ...action.payload,
                }
            }
        case type.FECTH_OFFERS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                offersList: [...state.offersList, ...action.payload],
                err: null
            }
        case type.CLEAR_AND_FETCH_OFFERS_LIST_START:
            return {
                ...state,
                loading: true,
                err: null,
                filter: clearFilters(InitialState.filter)
            }
        case type.CLEAR_AND_FETCH_OFFERS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                offersList: action.payload,
                err: null,
            }
        case type.FILTER_AND_FETCH_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                offersList: action.payload,
                err: null,
            }
        case type.FECTH_OFFERS_LIST_ERROR:
            return {
                ...state,
                loading: false,
                err: action.payload,
            }
        case type.OFFER_DETAIL_START:
            return {
                ...state,
                loadingDetail: true,
                currentPage: action.payload,
                errDetail: null
            }
        case type.OFFER_DETAIL_SUCCESS:
            return {
                ...state,
                loadingDetail: false,
                offerDetail: action.payload,
                errDetail: null
            }
        case type.OFFER_DETAIL_ERROR:
            return {
                ...state,
                loadingDetail: false,
                errDetail: action.payload,
            }
        case type.SEARCH_START:
            return {
                ...state,
                loadingSearch: true,
                errSearch: null
            }
        case type.SEARCH_ERROR:
            return {
                ...state,
                loadingSearch: false,
                errSearch: action.payload
            }
        case type.COURSES_SEARCH_SUCCESS:
            return {
                ...state,
                loadingSearch: false,
                courses: action.payload.list,
                courseSearch: action.payload.text,
                errSearch: null,
            }
        case type.UNIVERTISY_SEARCH_SUCCESS:
            return {
                ...state,
                loadingSearch: false,
                universities: action.payload.list,
                universitySearch: action.payload.text,
                errSearch: null,
            }
        default:
            return state;
    }
};
