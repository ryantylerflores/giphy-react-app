import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import * as actions from '../actions/actions';

const Searchbar = (props) => {

  // local state for input field
  const [searchText, setSearchText] = useState('');

  // Handles onChange event in input field
  const searchTextHandler = event => {
    setSearchText(event.target.value);
  }

  // Handles submit action for form, fetches search results, stores what was just searched, and clears input field
  const onSubmitHandler = event => {
    event.preventDefault();
    props.fetchSearchResults(searchText);
    props.previousSearch(searchText);
    setSearchText('');
  }

  // fetches search result when button is used and clears input field
  const fetchSearchHandler = () => {
    props.fetchSearchResults(searchText);
    setSearchText('');
  }

  return (
    <div className='container my-5'>
      <div className='row'>
        <form className='mx-auto col-11 col-sm-12 px-0' onSubmit={ onSubmitHandler }>
          <div className='form-group'>
            <input
              type='text' 
              onChange={ searchTextHandler }
              value={ searchText }
              placeholder='Search GIPHY for gifs...'
              className='form-control rounded-pill'
            />
          </div>
        </form>
        <div className='col-12 px-0 text-center'>
          <Button 
            text={`Search`} 
            actions={ fetchSearchHandler }
            classes='btn search-btn'
          />
          <Button 
            text={`Feeling Lucky?`} 
            actions={ () => props.fetchRandomResult() }
            classes='btn lucky-button'
          />
        </div>
      </div>
    </div>
  )
}

export default connect(null,actions)(Searchbar);