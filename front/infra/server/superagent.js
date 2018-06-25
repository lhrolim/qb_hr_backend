import superagentPromise from "superagent-promise";
import _superagent from "superagent";
import store from "../core/store";
import { buildFilter } from "../../app/helpers/offers";

const props = require("./server.json");

const superagent = superagentPromise(_superagent, global.Promise);

// const encode = encodeURIComponent;
const responseBody = res => {
    return {
        data: res.body,
        err: null
    };
};

const failure = error => {
    return {
        err: error
    };
};

const tokenPlugin = req => {
    const state = store.getState();
    //TODO: set bearer jwt token
    //TODO: mark ajax begin
};

const Api = () => {
    var env = process.env.NODE_ENV;
    return env === "development" ? props.dev : props.prod;
};

const requests = {
    del: async url =>
        await superagent.del(`${Api()}${url}`)
            .use(tokenPlugin)
            .then(responseBody)
            .catch(failure),
    get: async url =>
        await superagent
            .get(`${Api()}${url}`)
            .use(tokenPlugin)
            .then(responseBody)
            .catch(failure),
    put: async (url, body) =>
        await superagent
            .put(`${Api()}${url}`, body)
            .use(tokenPlugin)
            .then(responseBody)
            .catch(failure),
    post: async (url, body) =>
        await superagent
            .post(`${Api()}${url}`, body)
            .use(tokenPlugin)
            .then(responseBody)
            .catch(failure)
};

const Offer = {
    list: async () => {
        const filter = buildFilter(store.getState().offerReducer.filter)
        return await requests.get(`offer${filter}`)
    },
    detail: async offerId => await requests.get(`offer/${offerId}`),
};

const Course = {
    searchByName: async name => await requests.get(`course?name=${name}`)
};

const University = {
    searchByName: async name => await requests.get(`university?name=${name}`)
};

export default {
    Offer,
    Course,
    University
};
