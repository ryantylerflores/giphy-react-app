import axios from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const fetchSearchResults = payload => async dispatch => {
  await axios.get(`http://api.giphy.com/v1/gifs/search?q=${payload}&api_key=${API_KEY}&limit=30`)
    .then(response => {
      if(!response.status === 200) {
        throw new Error('Failed to fetch.')
      }
      return response;
    })
    .then(data => {
      dispatch({ type: 'SEARCH_RESULTS', payload: data })
      dispatch({ type: 'RESULT_TYPE', payload: 'search'});
      dispatch({ type: 'PREVIOUS_SEARCH', payload: payload});
    })
    .catch(err => {
      console.log(err);
    })
}

export const previousSearch = text => {
  return {
    type: 'PREVIOUS_SEARCH',
    payload: text
  }
}

export const fetchRandomResult = () => async dispatch => {
  await axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
    .then(response => {
      if(!response.status === 200) {
        throw new Error('Failed to fetch.')
      }
      return response;
    })
    .then(data => {
      dispatch({ type: 'RANDOM_RESULT', payload: data })
      dispatch({ type: 'PREVIOUS_SEARCH', payload: data.data.data.title});
      dispatch({ type: 'RESULT_TYPE', payload: 'random'});
    })
    .catch(err => {
      console.log(err);
    })
}

