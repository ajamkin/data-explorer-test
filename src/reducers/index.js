import { combineReducers } from 'redux';
import * as actionTypes from '../actions/types'

const posts = (state = [], action) => {
  switch (action.type) {
    case actionTypes.POSTS.SUCCESS: {
      return action.response;
    }
    default:
      return state;
  }
};

const comments = (state = [], action) => {
  switch (action.type) {
    case actionTypes.COMMENTS.SUCCESS: {
      return action.response;
    }
    default:
      return state;
  }
};

export default combineReducers({
  posts,
  comments,
});
