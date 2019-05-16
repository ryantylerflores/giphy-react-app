import React from 'react';
import './styles.css';

const Trending = (props) => {

  // Loading screen if data hasn't populated
  const loading = <div className='row text-center'>Loading...</div>

  // Maps through trending data and makes images for trending section
  const notLoading = <div className='img-div'>
                      { props.content.map((items,index) => {
                        return <img 
                          key={ index }
                          alt={ items.title }
                          src={ items.images.fixed_height.url }
                          className='mr-2'
                        />
                      })}
                    </div>

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div>
          <span className='white header-style'>
            Popular Gifs of the Week.
          </span>
        </div>
        <div className='scrolling-images'>
          { props.isLoading ? loading : notLoading }
        </div>
      </div>
    </div>
  )
}

export default Trending