const initialState = {
    user: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.payload,
        };
        case 'LOGOUT_USER':
          return {
            ...state,
            user: null,
          };
          case 'SET_SEARCH_RESULTS':
            return {
              ...state,
              searchResults: action.payload,
            };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  