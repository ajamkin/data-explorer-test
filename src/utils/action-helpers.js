import { get, isEmpty } from 'lodash';

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export const createRequestTypes = (base) => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc
  }, {})
};

export const commonIsFetchingReducer = (action, requestTypes) => {
  switch (action.type) {
    case requestTypes[REQUEST]:
      return true;
    case requestTypes[SUCCESS]:
    case requestTypes[FAILURE]:
      return false;
    default:
      return false;
  }
};

export const fetchCommon = (apiCall, dispatch, requestTypes) => {
  dispatch({
    type: requestTypes[REQUEST]
  });
  return apiCall().then(
    response => {
      const errorMessage = get(response, 'Error');
      if (!isEmpty(errorMessage)) {
        toastrError(errorMessage);
        throw new Error(errorMessage);
      }

      dispatch({
        type: requestTypes[SUCCESS],
        response,
      });

      return response;
    },
    error => {
      toastrError(error);
      dispatch({
        type: requestTypes[FAILURE],
        error,
      });
      throw error;
    });
};
