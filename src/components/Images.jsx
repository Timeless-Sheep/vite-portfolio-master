import React from 'react'


export const Images = () => {
  return (
    <div className="container-gallery">
        <div className="gallery">
            <div className="gallery-item">
                <img className='gallery-image' src="/new-images/chilling.png" alt='chilling on the chair' />
            </div>
            <div className="gallery-item">
                <img className='gallery-image' src="/new-images/ongrass.png" alt='Outside the house' />
            </div>
            <div className="gallery-item">
                <img className='gallery-image' src="/new-images/smolkitten.png" alt='same jackets' />
            </div>
        </div>
    
    </div>
  )
}


export default Images