const initState = {
  author: 'ljh'
}

export const contextAPI = (state = initState, action) => {
  return {
    ...state,
    // ...action.data
  };
}