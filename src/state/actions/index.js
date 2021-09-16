export const setSearchField = (text) => {
  return (dispatch) => {
    dispatch({
      type: 'CHANGE_SEARCH_FIELD',
      payload: text
    });
  };
};

export const setRobots = (robots) => {
  return (dispatch) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/users';
    fetch(`${baseUrl}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch({
          type: 'SET_ROBOTS',
          payload: res
        });
      });
  };
};
