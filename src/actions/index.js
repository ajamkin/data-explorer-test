import * as actionTypes from './types';
import { fetchCommon } from '../utils/action-helpers';

export const fetchPosts = () => (dispatch) => {
  return fetchCommon(() => _fetch('https://jsonplaceholder.typicode.com/posts'), dispatch, actionTypes.POSTS);
};

export const fetchComments = () => (dispatch) => {
  return fetchCommon(() => _fetch('https://jsonplaceholder.typicode.com/comments'), dispatch, actionTypes.COMMENTS);
};

const _fetch = (url) => {
  return fetch(url, { mode: 'cors' })
    .then(resp => resp.json())
    .catch(ex => console.log(`fetching ${url} failed!`, ex));
};
