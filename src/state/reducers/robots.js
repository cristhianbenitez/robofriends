const reducer = (state = '', action = {}) => {
  switch (action.type) {
    case 'SET_ROBOTS':
      return {
        robots: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
