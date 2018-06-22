import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import qs from 'qs';
import store from '../core/store';

const props = require('./server.json');

const superagent = superagentPromise(_superagent, global.Promise);

// const encode = encodeURIComponent;
const responseBody = res => {
  //TODO: mark ajax end
  return res.body;
};

const failure = error => {
  //TODO: mark ajax end
  //TODO: handle notification error
  console.error(error);
  return error;
};

const tokenPlugin = req => {
  const state = store.getState();
  //TODO: set bearer jwt token
  //TODO: mark ajax begin
};

const Api = () => {
  var env = process.env.NODE_ENV;
  return env === 'development' ? props.dev : props.prod;
};

const requests = {
  del: async url =>
    await superagent
      .del(`${Api()}${url}`)
      .use(tokenPlugin)
      .then(responseBody)
      .catch(failure),
  get: async (url, params) =>
    await superagent
      .get(`${Api()}${url}`)
      .query(qs.stringify(params, {arrayFormat: 'brackets'}))
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
  list: async (params) => await requests.get('offer', params),
  detail: async offerId => await requests.get(`offer/${offerId}`)
};

const Subject = {
  list: async () => await requests.get('subject')
};

const University = {};

export default {
  Offer,
  Subject,
  University
};
