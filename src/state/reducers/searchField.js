// (state = '', action = {}) means the default value of the parameters
const reducer = (state = '', action = '') => {
  switch (action.type) {
    case 'CHANGE_SEARCH_FIELD':
      return { searchField: action.payload };
    default:
      return state;
  }
};
export default reducer;
