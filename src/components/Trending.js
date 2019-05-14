import React from 'react';
import './styles.css';

const Trending = (props) => {
  const loading = <div className='row text-center'>Loading...</div>
  const notLoading = <div className='img'>
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
    <div className='container'>
      <div className='row'>
        <div>
          <h2 className='white sans-pro'>
            Popular Gifs of the Week.
          </h2>
        </div>
        <div className='scrolling-images'>
          { props.isLoading ? loading : notLoading }
        </div>
      </div>
    </div>
  )
}

export default Trending