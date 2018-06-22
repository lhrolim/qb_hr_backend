import superagentPromise from "superagent-promise";
import _superagent from "superagent";
import store from "../core/store";

const props = require("./server.json");

const superagent = superagentPromise(_superagent, global.Promise);

// const encode = encodeURIComponent;
const responseBody = res => {
    //TODO: mark ajax end
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
    list: async page => await requests.get(`offer?page=${page}`),
    detail: async offerId => await requests.get(`offer/${offerId}`)
};

const Course = {};

const University = {};

export default {
    Offer,
    Course,
    University
};
