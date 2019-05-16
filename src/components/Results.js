import React, { useState} from 'react';
import { connect } from 'react-redux';
import MasonryLayout from 'react-masonry-layout';
import './styles.css';

const Results = (props) => {

  console.log(props)

  const [perPage, setPerPage] = useState(10);
  const [items, setItems] = useState(Array(20).fill());

  const loadItems = () => {
    setItems(items.concat(Array(perPage).fill()));
  }
  
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
              <div className='ml-5 pro-sans white'>
                <h2>
                  #{ props.previous } <span>{ props.results.data.data.length } search results</span>
                </h2>
              </div>
              <div className="row mx-auto">
              {/* <div className="col-12"> */}
                <MasonryLayout
                  id="masonry-layout"
                  infiniteScroll={ loadItems }
                  sizes={[ { columns: 1, gutter: 20 }, { mq: '500px', columns: 2, gutter: 20 }, { mq: '700px', columns: 3, gutter: 20 }, { mq: '900px', columns: 4, gutter: 20 }, {mq: '1100px', columns: 5, gutter: 20 }, { mq: '1300px', columns: 6, gutter: 20 } ]}
                >
                  { props.results.data.data.map((item, index) => {
                    return (
                      <div
                        id='result-img'
                        key={ index }
                        style={{
                          width: `200px`,
                          height: `${ item.images.fixed_width.height }px`,
                          lineHeight: `${ item.images.fixed_width.height }px`,
                          display: 'block',
                        }}
                      >
                        <img alt={ item.title} className='my-2 mx-2 rounded' src={ item.images.fixed_width.url } />
                      </div>
                    )}
                  ) }
                </MasonryLayout>
              </div>
              {/* </div> */}
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
      <div className='pb-4 container-fluid'>
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