export const singleIsLoadingReducer = (state = false, action) => {
  switch(action.type) {
    case 'SINGLE_IS_LOADING':
      return action.singleIsLoading
    default:
      return state
  }
}

