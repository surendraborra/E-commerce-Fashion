export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
  });
  // userActions.js
export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});
export const logoutUserWithRefresh = () => (dispatch) => {
  // Dispatch the logoutUser action
  dispatch(logoutUser());

  // Refresh the page
  window.location.reload();
};
export const setSearchResults = (results) => {
  return {
    type: 'SET_SEARCH_RESULTS',
    payload: results,
  };
};
