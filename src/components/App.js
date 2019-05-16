import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Results from './Results';
import Searchbar from './Searchbar'
import Trending from './Trending'
import Header from './Header';

import './styles.css'


const App = () => {
  // Pulls API KEY
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  // Local state for trending data & checks if data is loading
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sends call to API, checks for errors & handles data
  useEffect(() => {
    setIsLoading(true);
    axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=15`)
      .then(response => {
        if(!response.status === 200) {
          throw new Error('Failed to fetch.')
        }
        return response;
      })
      .then(data => {
        setTrending(data.data.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        isLoading(false);
      });
  },[])

  return (
    <div className='AppBackground'>
      <Header />
      <div className='mt-3 container-fluid'>
        <Trending 
          content={ trending }
          isLoading={ isLoading }
        />
        <Searchbar />
        <Results />
      </div>
    </div>
  );
}

export default App;
