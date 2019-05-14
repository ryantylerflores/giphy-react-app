export default (state = {}, action) => {
  switch(action.type) {
    case 'SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.payload
      }
    case 'FETCH_FAILED':
      return {
        ...state,
        error: action.payload
      }
    case 'PREVIOUS_SEARCH':
      return {
        ...state,
        previousSearch: action.payload
      }
    case 'RANDOM_RESULT':
      return {
        ...state,
        randomResult: action.payload
      }
    case 'RESULT_TYPE':
      return {
        ...state,
        type: action.payload
      }
    default:
      return state;
  }
}