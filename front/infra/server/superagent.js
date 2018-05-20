import superagentPromise from "superagent-promise";
import _superagent from "superagent";
import store from "../core/store";

const props = require("./server.json");

const superagent = superagentPromise(_superagent, global.Promise);

// const encode = encodeURIComponent;
const responseBody = res => {
  //TODO: mark ajax end
  return res.body;
};

const failure = error => {
  //TODO: mark ajax end
  //TODO: handle notification error
  return error;
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
  del: url =>
    await superagent.del(`${Api()}${url}`)
      .use(tokenPlugin)
      .then(responseBody)
      .catch(failure),
  get: url =>
    superagent
      .get(`${Api()}${url}`)
      .use(tokenPlugin)
      .then(responseBody)
      .catch(failure),
  put: (url, body) =>
    await superagent
      .put(`${Api()}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody)
      .catch(failure),
  post: (url, body) =>
  await superagent
      .post(`${Api()}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody)
      .catch(failure)
};

const Offer = {
  list: async () => await requests.get("offer"),
  detail: async offerId => await requests.get(`offer/${offerId}`)
};

const Course = {};

const University = {};

export default {
  Offer,
  Course,
  University
};
