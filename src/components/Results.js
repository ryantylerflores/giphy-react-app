import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

const Results = (props) => {
  
  // If no data has been retrieved from search or random button fired, gives empty div
  if(!props.results && !props.random) {
    return <React.Fragment />
  } else {
    let searchResultContent;
    let randomResultContent;

    // Checks if search data has been retrieved
    if(props.results) {
      // If search is initiated with no data or API request fails, gives error screen
      if(props.results.data.data.length === 0 || props.results.data.meta.status !== 200){
        searchResultContent = <div className='pro-sans white'>
                                <h2>
                                  Please Try Again!
                                </h2>
                              </div>
      } else {
        searchResultContent =  
            <div className='row'>
              <div className='mx-3 pro-sans white'>
                <h2>
                  #{ props.previous }
                </h2>
                <span className='ml-2'>
                  { props.results.data.data.length } search results
                </span>
              </div>
              <div className='row text-center'>
                { props.results.data.data.map((item,index) => {
                  return(
                    <div key={ index } className='col-12 col-sm-6 col-md-4 col-lg-3'>
                      <img alt={ item.title} className='my-2 mx-2 fit-image rounded' src={ item.images.fixed_width.url } />
                    </div>)
                  })
                }
              </div>
            </div>  
      }
    }

    // renders content for random button being fired
    if(props.random) {
      randomResultContent = <div className='row'>
                              <div className='col-12 col-md-6'>
                                <div className='white'>
                                  <h2>
                                    #{ props.previous }
                                  </h2>
                                </div>
                              </div>
                              <div className='col-12 col-md-6 text-center'>
                                <div className='d-flex'>
                                  <img className='fit-image rounded' alt='' src={ props.random.data.data.images.original.url } />
                                </div>
                              </div>
                            </div>
    }

    // Checks if search or random actiom was fired & renders correct content
    let content = props.type === 'search' ? searchResultContent : randomResultContent;

    return(
      <div className='pb-4 container'>
        { content }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    results: state.search.searchResults, 
    previous: state.search.previousSearch, 
    random: state.search.randomResult, 
    type: state.search.type }
}

export default connect(mapStateToProps)(Results)