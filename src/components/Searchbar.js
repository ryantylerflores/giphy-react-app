import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import * as actions from '../actions/actions';

const Searchbar = (props) => {
  const [searchText, setSearchText] = useState('');

  const searchTextHandler = event => {
    setSearchText(event.target.value);
  }

  const onSubmitHandler = event => {
    event.preventDefault();
    props.fetchSearchResults(searchText);
    props.previousSearch(searchText);
    setSearchText('');
  }

  const fetchSearchHandler = () => {
    props.fetchSearchResults(searchText);
    setSearchText('');
  }

  return (
    <div className='container my-5'>
      <div className='row'>
        <form className='col-12 px-0' onSubmit={ onSubmitHandler }>
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
            classes='btn btn-outline-primary'
          />
          <Button 
            text={`I'm Feeling Lucky`} 
            actions={ () => props.fetchRandomResult() }
            classes='btn btn-outline-success'
          />
        </div>
      </div>
    </div>
  )
}

export default connect(null,actions)(Searchbar);