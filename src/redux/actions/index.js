import axios from 'axios';

export const setSearchField = (text) => {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_SEARCH_FIELD',
      payload: text
    });
  };
};

export const requestRobots = () => (dispatch) => {
  dispatch({ type: 'REQUEST_ROBOTS_PENDING' });
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(({ data }) =>
      dispatch({ type: 'REQUEST_ROBOTS_SUCCESS', payload: data })
    )
    .catch((error) => {
      dispatch({ type: 'REQUEST_ROBOTS_FAILED', payload: error });
    });
};
